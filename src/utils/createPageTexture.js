import * as THREE from 'three';

/**
 * Helper to draw soft blue circle spec icons (Droplet, UV Badge, Shield Check)
 */
function drawSpecIcon(ctx, specText, index, cx, cy, r) {
  // Soft Light Sky Blue Circle Background (#E0F2FE)
  ctx.fillStyle = '#E0F2FE';
  ctx.beginPath();
  ctx.arc(cx, cy, r, 0, Math.PI * 2);
  ctx.fill();

  const iconColor = '#0066FF';
  const textUpper = specText.toUpperCase();

  if (textUpper.includes('UV') || index === 1) {
    // 2. UV Text Badge Icon
    ctx.fillStyle = iconColor;
    ctx.font = `800 ${Math.round(r * 0.9)}px "Plus Jakarta Sans", sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('UV', cx, cy + 2);
  } else if (textUpper.includes('COPPER') || textUpper.includes('PROTECTION') || textUpper.includes('SECURITY') || textUpper.includes('DETECTION') || textUpper.includes('BACKUP') || index === 2) {
    // 3. Shield Check Icon
    ctx.fillStyle = iconColor;
    ctx.beginPath();
    ctx.moveTo(cx, cy - r * 0.45);
    ctx.lineTo(cx + r * 0.4, cy - r * 0.25);
    ctx.lineTo(cx + r * 0.4, cy + r * 0.1);
    ctx.bezierCurveTo(cx + r * 0.4, cy + r * 0.45, cx, cy + r * 0.6, cx, cy + r * 0.6);
    ctx.bezierCurveTo(cx, cy + r * 0.6, cx - r * 0.4, cy + r * 0.45, cx - r * 0.4, cy + r * 0.1);
    ctx.lineTo(cx - r * 0.4, cy - r * 0.25);
    ctx.closePath();
    ctx.fill();

    // White plus sign inside shield
    ctx.fillStyle = '#FFFFFF';
    const pw = Math.max(3, Math.round(r * 0.14));
    const pl = Math.round(r * 0.42);
    ctx.fillRect(cx - pw / 2, cy - pl / 2, pw, pl);
    ctx.fillRect(cx - pl / 2, cy - pw / 2, pl, pw);
  } else {
    // 1. Water Droplet Icon (Default / Spec 0)
    ctx.fillStyle = iconColor;
    ctx.beginPath();
    ctx.moveTo(cx, cy - r * 0.52);
    ctx.bezierCurveTo(cx - r * 0.48, cy + r * 0.1, cx - r * 0.42, cy + r * 0.52, cx, cy + r * 0.52);
    ctx.bezierCurveTo(cx + r * 0.42, cy + r * 0.52, cx + r * 0.48, cy + r * 0.1, cx, cy - r * 0.52);
    ctx.fill();
  }
}

/**
 * Creates an Ultra-HD 2D canvas texture for the hero catalogue page.
 * Calculates dynamic canvas resolution matching the exact viewport container aspect ratio
 * to ensure ZERO text squishing/stretching and razor-sharp crystal clear readability.
 */
export function createPageCanvasTexture(pageData, onLoaded, isMobile = false, containerAspect = null) {
  let width, height;

  if (isMobile) {
    width = 2048;
    const aspect = containerAspect || (390 / 640);
    height = Math.round(width / aspect);
  } else {
    width = 3072;
    const aspect = containerAspect || (16 / 9);
    height = Math.round(width / aspect);
  }

  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;

  const ctx = canvas.getContext('2d');
  ctx.textRendering = 'geometricPrecision';

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;
  texture.anisotropy = 16;
  texture.generateMipmaps = true;

  const img = new Image();
  img.crossOrigin = 'anonymous';
  img.src = pageData.image;

  const renderCanvas = () => {
    try {
      // 1. BASE LIGHT THEME BACKGROUND WITH SOFT WATER BLUE GRADIENT
      ctx.fillStyle = '#F8FAFC';
      ctx.fillRect(0, 0, width, height);

      const isImgReady = img.complete && img.naturalWidth > 0;

      if (isMobile) {
        // Base White Background
        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(0, 0, width, height);

        const centerX = width / 2;
        const margin = 40;
        const maxTextW = width - margin * 2;

        // Soft Radial Glow in Center Background
        ctx.save();
        const glowRadius = width * 0.7;
        const accentGlow = ctx.createRadialGradient(centerX, height * 0.4, 30, centerX, height * 0.4, glowRadius);
        accentGlow.addColorStop(0, pageData.badgeBg ? pageData.badgeBg.replace('0.12', '0.25') : 'rgba(2, 132, 199, 0.22)');
        accentGlow.addColorStop(0.7, 'rgba(255, 255, 255, 0.85)');
        accentGlow.addColorStop(1, '#FFFFFF');
        ctx.fillStyle = accentGlow;
        ctx.fillRect(0, 0, width, height);
        ctx.restore();

        let currentY = height * 0.035;

        // 1. SMALL TEXT LIKE BADGE
        if (pageData.category || pageData.badge) {
          const badgeText = (pageData.category || pageData.badge).toUpperCase();
          ctx.save();
          ctx.font = '800 48px "Plus Jakarta Sans", "Inter", sans-serif';
          const badgeMetrics = ctx.measureText(badgeText);
          const padX = 48;
          const bWidth = badgeMetrics.width + padX * 2;
          const bHeight = 90;
          const bX = centerX - bWidth / 2;

          ctx.fillStyle = 'rgba(11, 27, 61, 0.07)';
          ctx.beginPath();
          ctx.roundRect(bX, currentY, bWidth, bHeight, 45);
          ctx.fill();

          ctx.strokeStyle = 'rgba(11, 27, 61, 0.2)';
          ctx.lineWidth = 3.5;
          ctx.stroke();

          ctx.fillStyle = '#0B1B3D';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText(badgeText, centerX, currentY + bHeight / 2 + 1);
          ctx.restore();

          currentY += bHeight + 36;
        }

        // 2. HEADING
        ctx.save();
        let titleFontSize = 118;
        ctx.font = `900 ${titleFontSize}px "Plus Jakarta Sans", "Inter", system-ui, sans-serif`;
        const fullTitleText = pageData.title.replace(/\n/g, ' ');

        while (ctx.measureText(fullTitleText).width > maxTextW && titleFontSize > 48) {
          titleFontSize -= 2;
          ctx.font = `900 ${titleFontSize}px "Plus Jakarta Sans", "Inter", system-ui, sans-serif`;
        }

        ctx.textBaseline = 'top';
        const lines = pageData.title.split('\n');

        if (lines.length > 1) {
          const w0 = ctx.measureText(lines[0] + ' ').width;
          const w1 = ctx.measureText(lines[1]).width;
          const totalTitleW = w0 + w1;
          const startX = centerX - totalTitleW / 2;

          ctx.textAlign = 'left';
          ctx.fillStyle = '#0B1B3D';
          ctx.fillText(lines[0] + ' ', startX, currentY);

          ctx.fillStyle = '#EF1C2D';
          ctx.fillText(lines[1], startX + w0, currentY);
        } else {
          ctx.textAlign = 'center';
          ctx.fillStyle = '#0B1B3D';
          ctx.fillText(pageData.title, centerX, currentY);
        }
        ctx.restore();

        currentY += titleFontSize + 32;

        // 3. WORDINGS / SUBTITLE
        ctx.save();
        ctx.font = '600 50px "Inter", system-ui, sans-serif';
        ctx.fillStyle = '#1E293B';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'top';

        const subWords = pageData.subtitle.split(' ');
        let subLine = '';
        const subLines = [];

        for (let n = 0; n < subWords.length; n++) {
          const testLine = subLine + subWords[n] + ' ';
          const metrics = ctx.measureText(testLine);
          if (metrics.width > maxTextW && n > 0) {
            subLines.push(subLine.trim());
            subLine = subWords[n] + ' ';
          } else {
            subLine = testLine;
          }
        }
        if (subLine.trim()) subLines.push(subLine.trim());

        subLines.forEach((l) => {
          ctx.fillText(l, centerX, currentY);
          currentY += 66;
        });
        ctx.restore();

        currentY += 32;

        // 4. PRODUCT IMAGE
        const maxProdW = width * 0.94;
        const maxProdH = height * 0.46;
        let prodW = maxProdW;
        let prodH = maxProdH;

        if (isImgReady) {
          prodH = (img.height / img.width) * prodW;
          if (prodH > maxProdH) {
            prodH = maxProdH;
            prodW = (img.width / img.height) * prodH;
          }
        }

        const prodX = centerX - prodW / 2;
        const prodY = currentY;

        // Floor Shadow under Product
        ctx.save();
        const shadowX = centerX;
        const shadowY = prodY + prodH * 0.95;
        const shadowRx = prodW * 0.45;
        const shadowRy = 58;

        const outerShadow = ctx.createRadialGradient(shadowX, shadowY, 8, shadowX, shadowY, shadowRx);
        outerShadow.addColorStop(0, 'rgba(15, 23, 42, 0.22)');
        outerShadow.addColorStop(0.5, 'rgba(15, 23, 42, 0.08)');
        outerShadow.addColorStop(1, 'rgba(15, 23, 42, 0)');
        ctx.fillStyle = outerShadow;
        ctx.beginPath();
        ctx.ellipse(shadowX, shadowY, shadowRx, shadowRy, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        // Render Product Image if ready
        if (isImgReady) {
          ctx.save();
          ctx.drawImage(img, prodX, prodY, prodW, prodH);
          ctx.restore();
        }

        currentY = prodY + prodH + 42;

        // 5. CHARACTERISTICS / SPECS
        if (pageData.specs && pageData.specs.length > 0) {
          const specsList = pageData.specs.slice(0, 3);
          ctx.save();
          ctx.font = '700 48px "Plus Jakarta Sans", "Inter", sans-serif';

          const measuredItems = specsList.map((spec) => {
            const textW = ctx.measureText(spec).width;
            return { spec, textW, totalW: textW + 90 };
          });

          const gapBetween = 52;
          const totalRowW = measuredItems.reduce((acc, item) => acc + item.totalW, 0) + (measuredItems.length - 1) * gapBetween;

          if (totalRowW <= maxTextW) {
            let startX = centerX - totalRowW / 2;
            measuredItems.forEach((item) => {
              const iconCx = startX + 34;
              const iconCy = currentY + 34;

              ctx.fillStyle = '#EF1C2D';
              ctx.beginPath();
              ctx.arc(iconCx, iconCy, 34, 0, Math.PI * 2);
              ctx.fill();

              ctx.fillStyle = '#FFFFFF';
              ctx.font = '900 36px "Inter", sans-serif';
              ctx.textAlign = 'center';
              ctx.textBaseline = 'middle';
              ctx.fillText('✓', iconCx, iconCy + 1);

              ctx.textAlign = 'left';
              ctx.font = '700 48px "Plus Jakarta Sans", "Inter", sans-serif';
              ctx.fillStyle = '#0B1B3D';
              ctx.fillText(item.spec, startX + 86, iconCy);

              startX += item.totalW + gapBetween;
            });
            currentY += 86;
          } else {
            const row1 = measuredItems.slice(0, 2);
            const row2 = measuredItems.slice(2);

            const r1W = row1.reduce((acc, item) => acc + item.totalW, 0) + (row1.length - 1) * gapBetween;
            let startX1 = centerX - r1W / 2;
            row1.forEach((item) => {
              const iconCx = startX1 + 34;
              const iconCy = currentY + 34;

              ctx.fillStyle = '#EF1C2D';
              ctx.beginPath();
              ctx.arc(iconCx, iconCy, 34, 0, Math.PI * 2);
              ctx.fill();

              ctx.fillStyle = '#FFFFFF';
              ctx.font = '900 36px "Inter", sans-serif';
              ctx.textAlign = 'center';
              ctx.textBaseline = 'middle';
              ctx.fillText('✓', iconCx, iconCy + 1);

              ctx.textAlign = 'left';
              ctx.font = '700 48px "Plus Jakarta Sans", "Inter", sans-serif';
              ctx.fillStyle = '#0B1B3D';
              ctx.fillText(item.spec, startX1 + 86, iconCy);

              startX1 += item.totalW + gapBetween;
            });
            currentY += 82;

            if (row2.length > 0) {
              const r2W = row2.reduce((acc, item) => acc + item.totalW, 0) + (row2.length - 1) * gapBetween;
              let startX2 = centerX - r2W / 2;
              row2.forEach((item) => {
                const iconCx = startX2 + 34;
                const iconCy = currentY + 34;

                ctx.fillStyle = '#EF1C2D';
                ctx.beginPath();
                ctx.arc(iconCx, iconCy, 34, 0, Math.PI * 2);
                ctx.fill();

                ctx.fillStyle = '#FFFFFF';
                ctx.font = '900 36px "Inter", sans-serif';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText('✓', iconCx, iconCy + 1);

                ctx.textAlign = 'left';
                ctx.font = '700 48px "Plus Jakarta Sans", "Inter", sans-serif';
                ctx.fillStyle = '#0B1B3D';
                ctx.fillText(item.spec, startX2 + 86, iconCy);

                startX2 += item.totalW + gapBetween;
              });
              currentY += 82;
            }
          }
          ctx.restore();
          currentY += 22;
        }

        // 6. ACTION CTA BUTTON
        const buttonY = currentY + 28;
        const btnW = Math.min(740, maxTextW);
        const btnH = 132;
        const pillRadius = btnH / 2;
        const btnX = centerX - btnW / 2;

        ctx.save();
        ctx.shadowColor = 'rgba(220, 38, 38, 0.45)';
        ctx.shadowBlur = 40;
        ctx.shadowOffsetY = 16;

        const btnGrad = ctx.createLinearGradient(btnX, buttonY, btnX + btnW, buttonY + btnH);
        btnGrad.addColorStop(0, '#E50914');
        btnGrad.addColorStop(0.5, '#DC2626');
        btnGrad.addColorStop(1, '#991B1B');
        ctx.fillStyle = btnGrad;
        ctx.beginPath();
        ctx.roundRect(btnX, buttonY, btnW, btnH, pillRadius);
        ctx.fill();
        ctx.restore();

        ctx.save();
        ctx.font = '800 46px "Plus Jakarta Sans", "Inter", sans-serif';
        ctx.fillStyle = '#FFFFFF';
        ctx.textBaseline = 'middle';
        ctx.fillText(`${(pageData.buttonText || 'DISCOVER OUR SOLUTIONS').toUpperCase()}`, btnX + 60, buttonY + btnH / 2 + 1);

        ctx.font = '800 52px "Inter", sans-serif';
        ctx.fillText('→', btnX + btnW - 76, buttonY + btnH / 2 + 1);
        ctx.restore();

        currentY = buttonY + btnH + 52;

        // 7. TRUST WORDINGS
        ctx.save();
        const stats = pageData.stats || [
          { num: '15,000+', label: 'Happy Homes' },
          { num: '24/7', label: 'On-Site Service' },
          { num: '100%', label: 'Genuine Parts' },
          { num: '4.9★', label: 'Customer Rating' },
        ];

        ctx.font = '800 72px "Plus Jakarta Sans", sans-serif';
        const statColWidths = stats.slice(0, 3).map((st) => {
          const numW = ctx.measureText(st.num).width;
          ctx.font = '600 34px "Inter", sans-serif';
          const lblW = ctx.measureText(st.label).width;
          ctx.font = '800 72px "Plus Jakarta Sans", sans-serif';
          return Math.max(numW, lblW, 230);
        });

        const colGap = 64;
        const totalStatsW = statColWidths.reduce((a, b) => a + b, 0) + (statColWidths.length - 1) * colGap;
        let currStatX = centerX - totalStatsW / 2;

        stats.slice(0, 3).forEach((st, idx) => {
          const colW = statColWidths[idx];
          const colCenterX = currStatX + colW / 2;

          ctx.font = '800 72px "Plus Jakarta Sans", sans-serif';
          ctx.fillStyle = '#0B1B3D';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'top';
          ctx.fillText(st.num, colCenterX, currentY);

          ctx.font = '600 34px "Inter", sans-serif';
          ctx.fillStyle = '#334155';
          ctx.textAlign = 'center';
          ctx.fillText(st.label, colCenterX, currentY + 80);

          currStatX += colW + colGap;

          if (idx < 2) {
            ctx.fillStyle = '#CBD5E1';
            ctx.fillRect(currStatX - colGap / 2 - 1, currentY + 12, 3.5, 100);
          }
        });
        ctx.restore();

      } else {
        // DESKTOP LANDSCAPE CANVAS TEXTURE
        ctx.save();
        const glowX = width * 0.76;
        const glowY = height * 0.45;
        const glowRadius = width * 0.45;
        const accentGlow = ctx.createRadialGradient(glowX, glowY, 20, glowX, glowY, glowRadius);
        accentGlow.addColorStop(0, pageData.badgeBg ? pageData.badgeBg.replace('0.12', '0.28') : 'rgba(2, 132, 199, 0.28)');
        accentGlow.addColorStop(0.65, 'rgba(255, 255, 255, 0.75)');
        accentGlow.addColorStop(1, '#FFFFFF');
        ctx.fillStyle = accentGlow;
        ctx.fillRect(0, 0, width, height);
        ctx.restore();

        // Product Image Sizing Stage
        const maxProdW = width * 0.48;
        const maxProdH = height * 0.72;
        let prodW = maxProdW;
        let prodH = maxProdH;

        if (isImgReady) {
          prodH = (img.height / img.width) * prodW;
          if (prodH > maxProdH) {
            prodH = maxProdH;
            prodW = (img.width / img.height) * prodH;
          }
        }

        const prodX = width * 0.75 - prodW / 2;
        const prodY = height * 0.52 - prodH / 2;

        // Soft Floor Shadow
        ctx.save();
        const shadowX = prodX + prodW * 0.5;
        const shadowY = prodY + prodH * 0.95;
        const shadowRx = prodW * 0.45;
        const shadowRy = 52;

        const outerShadow = ctx.createRadialGradient(shadowX, shadowY, 8, shadowX, shadowY, shadowRx);
        outerShadow.addColorStop(0, 'rgba(15, 23, 42, 0.25)');
        outerShadow.addColorStop(0.5, 'rgba(15, 23, 42, 0.09)');
        outerShadow.addColorStop(1, 'rgba(15, 23, 42, 0)');
        ctx.fillStyle = outerShadow;
        ctx.beginPath();
        ctx.ellipse(shadowX, shadowY, shadowRx, shadowRy, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        // Draw Product Image if ready
        if (isImgReady) {
          ctx.save();
          ctx.drawImage(img, prodX, prodY, prodW, prodH);
          ctx.restore();
        }

        // Left Side Editorial Typography
        const leftMargin = width * 0.058;
        const maxLeftContentW = width * 0.46;
        let currentY = height * 0.22;

        // Top Category Badge Pill
        if (pageData.category || pageData.badge) {
          const badgeText = (pageData.category || pageData.badge).toUpperCase();
          ctx.save();
          ctx.font = '800 28px "Plus Jakarta Sans", "Inter", sans-serif';
          const badgeMetrics = ctx.measureText(badgeText);
          const padX = 32;
          const bWidth = badgeMetrics.width + padX * 2;
          const bHeight = 56;

          ctx.fillStyle = 'rgba(11, 27, 61, 0.07)';
          ctx.beginPath();
          ctx.roundRect(leftMargin, currentY, bWidth, bHeight, 28);
          ctx.fill();

          ctx.strokeStyle = 'rgba(11, 27, 61, 0.2)';
          ctx.lineWidth = 2.5;
          ctx.stroke();

          ctx.fillStyle = '#0B1B3D';
          ctx.textBaseline = 'middle';
          ctx.fillText(badgeText, leftMargin + padX, currentY + bHeight / 2 + 1);
          ctx.restore();

          currentY += bHeight + 28;
        }

        // Main Large Editorial Headline
        ctx.save();
        ctx.font = '900 118px "Plus Jakarta Sans", "Inter", system-ui, sans-serif';
        ctx.textBaseline = 'top';

        const lines = pageData.title.split('\n');
        lines.forEach((line, lineIdx) => {
          ctx.fillStyle = lineIdx === 1 ? '#EF1C2D' : '#0B1B3D';
          ctx.fillText(line, leftMargin, currentY);
          currentY += 132;
        });
        ctx.restore();

        currentY += 14;

        // Subtitle Paragraph
        ctx.save();
        ctx.font = '600 40px "Inter", system-ui, sans-serif';
        ctx.fillStyle = '#1E293B';
        ctx.textBaseline = 'top';

        const subWords = pageData.subtitle.split(' ');
        let subLine = '';
        let subY = currentY;

        for (let n = 0; n < subWords.length; n++) {
          const testLine = subLine + subWords[n] + ' ';
          const metrics = ctx.measureText(testLine);
          if (metrics.width > maxLeftContentW && n > 0) {
            ctx.fillText(subLine, leftMargin, subY);
            subLine = subWords[n] + ' ';
            subY += 58;
          } else {
            subLine = testLine;
          }
        }
        ctx.fillText(subLine, leftMargin, subY);
        ctx.restore();

        currentY = subY + 54;

        // Bullet Checkmarks List
        if (pageData.specs && pageData.specs.length > 0) {
          ctx.save();
          pageData.specs.slice(0, 3).forEach((spec) => {
            ctx.fillStyle = '#EF1C2D';
            ctx.beginPath();
            ctx.arc(leftMargin + 20, currentY + 20, 20, 0, Math.PI * 2);
            ctx.fill();

            ctx.fillStyle = '#FFFFFF';
            ctx.font = '900 24px "Inter", sans-serif';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText('✓', leftMargin + 20, currentY + 21);

            ctx.textAlign = 'left';
            ctx.font = '700 36px "Inter", system-ui, sans-serif';
            ctx.fillStyle = '#0B1B3D';
            ctx.fillText(spec, leftMargin + 56, currentY + 20);

            currentY += 58;
          });
          ctx.restore();
          currentY += 12;
        }

        // Action CTA Button
        const buttonY = currentY + 36;
        const btnW = 520;
        const btnH = 88;
        const pillRadius = btnH / 2;

        ctx.save();
        ctx.shadowColor = 'rgba(220, 38, 38, 0.45)';
        ctx.shadowBlur = 28;
        ctx.shadowOffsetY = 12;

        const btnGrad = ctx.createLinearGradient(leftMargin, buttonY, leftMargin + btnW, buttonY + btnH);
        btnGrad.addColorStop(0, '#E50914');
        btnGrad.addColorStop(0.5, '#DC2626');
        btnGrad.addColorStop(1, '#991B1B');
        ctx.fillStyle = btnGrad;
        ctx.beginPath();
        ctx.roundRect(leftMargin, buttonY, btnW, btnH, pillRadius);
        ctx.fill();
        ctx.restore();

        ctx.save();
        ctx.font = '800 28px "Plus Jakarta Sans", "Inter", sans-serif';
        ctx.fillStyle = '#FFFFFF';
        ctx.textBaseline = 'middle';
        ctx.fillText(`${(pageData.buttonText || 'EXPLORE PRODUCTS').toUpperCase()}`, leftMargin + 48, buttonY + btnH / 2 + 1);

        ctx.font = '800 32px "Inter", sans-serif';
        ctx.fillText('→', leftMargin + btnW - 60, buttonY + btnH / 2 + 1);
        ctx.restore();

        // Stat Counter Row
        const statsY = buttonY + btnH + 60;
        ctx.save();
        const stats = pageData.stats || [
          { num: '15,000+', label: 'Happy Homes' },
          { num: '24/7', label: 'On-Site Service' },
          { num: '100%', label: 'Genuine Parts' },
          { num: '4.9★', label: 'Customer Rating' },
        ];

        let statX = leftMargin;
        stats.forEach((st, idx) => {
          ctx.font = '800 46px "Plus Jakarta Sans", sans-serif';
          ctx.fillStyle = '#0B1B3D';
          ctx.textBaseline = 'top';
          ctx.fillText(st.num, statX, statsY);

          ctx.font = '600 24px "Inter", sans-serif';
          ctx.fillStyle = '#334155';
          ctx.fillText(st.label, statX, statsY + 58);

          const numW = ctx.measureText(st.num).width;
          ctx.font = '600 24px "Inter", sans-serif';
          const labelW = ctx.measureText(st.label).width;
          const colW = Math.max(numW, labelW, 200) + 60;

          statX += colW;
          if (idx < stats.length - 1) {
            ctx.fillStyle = '#CBD5E1';
            ctx.fillRect(statX - 30, statsY + 6, 2.5, 72);
          }
        });
        ctx.restore();
      }

      texture.needsUpdate = true;
    } catch (err) {
      console.warn('Canvas render exception handled:', err);
    }
  };

  // 1. Draw INSTANTLY on call so canvas is NEVER blank/transparent (0ms initial render)
  renderCanvas();

  // 2. Redraw when image completes loading over network
  img.onload = () => {
    renderCanvas();
    if (onLoaded) onLoaded(texture);
  };

  // 3. If image was already cached/complete, redraw immediately
  if (img.complete && img.naturalWidth > 0) {
    renderCanvas();
    if (onLoaded) onLoaded(texture);
  }

  return texture;
}




