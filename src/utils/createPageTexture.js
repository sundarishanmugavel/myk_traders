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

  img.onload = () => {
    // 1. BASE LIGHT THEME BACKGROUND WITH SOFT WATER BLUE GRADIENT
    ctx.fillStyle = '#F8FAFC';
    ctx.fillRect(0, 0, width, height);

    if (isMobile) {
      // =========================================================================
      // MOBILE PORTRAIT CANVAS TEXTURE (MATCHING VERCEL MOBILE SCREENSHOT)
      // =========================================================================
      
      const leftMargin = 75;
      const maxLeftContentW = width * 0.47 - leftMargin; // ~890px
      const rightCenterX = width * 0.76; // ~1556px
      const topStartY = height * 0.12;

      // Water Splash Radial Accent Glow on Right Side
      ctx.save();
      const glowX = rightCenterX;
      const glowY = topStartY + (height * 0.28);
      const glowRadius = width * 0.48;
      const accentGlow = ctx.createRadialGradient(glowX, glowY, 30, glowX, glowY, glowRadius);
      accentGlow.addColorStop(0, 'rgba(0, 149, 255, 0.28)');
      accentGlow.addColorStop(0.55, 'rgba(224, 242, 254, 0.6)');
      accentGlow.addColorStop(1, '#F8FAFC');
      ctx.fillStyle = accentGlow;
      ctx.fillRect(0, 0, width, height);
      ctx.restore();

      // RIGHT SIDE PRODUCT IMAGE STAGE
      const maxProdW = width * 0.46; // ~940px
      const maxProdH = height * 0.62; // ~1500px
      let prodW = maxProdW;
      let prodH = (img.height / img.width) * prodW;

      if (prodH > maxProdH) {
        prodH = maxProdH;
        prodW = (img.width / img.height) * prodH;
      }

      const prodX = rightCenterX - prodW / 2;
      const prodY = topStartY + 15; // Top aligned with headline

      // Water Pedestal Disc Graphic on Right Side
      ctx.save();
      const shadowX = rightCenterX;
      const shadowY = prodY + prodH * 0.94;
      const shadowRx = prodW * 0.46;
      const shadowRy = 55;

      const outerShadow = ctx.createRadialGradient(shadowX, shadowY, 10, shadowX, shadowY, shadowRx);
      outerShadow.addColorStop(0, 'rgba(0, 102, 255, 0.25)');
      outerShadow.addColorStop(0.6, 'rgba(186, 230, 253, 0.15)');
      outerShadow.addColorStop(1, 'rgba(255, 255, 255, 0)');
      ctx.fillStyle = outerShadow;
      ctx.beginPath();
      ctx.ellipse(shadowX, shadowY, shadowRx, shadowRy, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      // Render Product Image on Right Side
      ctx.save();
      ctx.drawImage(img, prodX, prodY, prodW, prodH);
      ctx.restore();

      // LEFT SIDE EDITORIAL TYPOGRAPHY
      let currentY = topStartY;

      // 1. Top Category Badge Pill (#E0F2FE Light Blue)
      if (pageData.category || pageData.badge) {
        const badgeText = (pageData.category || pageData.badge).toUpperCase();
        ctx.save();
        ctx.font = '800 32px "Plus Jakarta Sans", "Inter", sans-serif';
        const badgeMetrics = ctx.measureText(badgeText);
        const padX = 32;
        const bWidth = badgeMetrics.width + padX * 2;
        const bHeight = 64;

        ctx.fillStyle = '#E0F2FE';
        ctx.beginPath();
        ctx.roundRect(leftMargin, currentY, bWidth, bHeight, 32);
        ctx.fill();

        ctx.fillStyle = '#0284C7';
        ctx.textBaseline = 'middle';
        ctx.fillText(badgeText, leftMargin + padX, currentY + bHeight / 2 + 2);
        ctx.restore();

        currentY += bHeight + 32;
      }

      // 2. Main Headline (Line 1: Deep Navy #0B1B3D, Line 2: Electric Blue #0066FF)
      ctx.save();
      ctx.font = '900 88px "Plus Jakarta Sans", "Inter", system-ui, sans-serif';
      ctx.textBaseline = 'top';

      const lines = pageData.title.split('\n');
      lines.forEach((line, lineIdx) => {
        ctx.fillStyle = lineIdx === 1 ? '#0066FF' : '#0B1B3D';
        ctx.fillText(line, leftMargin, currentY);
        currentY += 100;
      });
      ctx.restore();

      currentY += 12;

      // 3. Subtitle Paragraph
      ctx.save();
      ctx.font = '600 32px "Inter", system-ui, sans-serif';
      ctx.fillStyle = '#475569';
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
          subY += 48;
        } else {
          subLine = testLine;
        }
      }
      ctx.fillText(subLine, leftMargin, subY);
      ctx.restore();

      currentY = subY + 45;

      // 4. Specs Checklist with Soft Blue Icon Circles
      if (pageData.specs && pageData.specs.length > 0) {
        ctx.save();
        pageData.specs.slice(0, 3).forEach((spec, specIdx) => {
          const circleX = leftMargin + 28;
          const circleY = currentY + 28;
          const circleR = 28;

          // Draw Soft Blue Circle Spec Icon
          drawSpecIcon(ctx, spec, specIdx, circleX, circleY, circleR);

          // Spec Label Text
          ctx.textAlign = 'left';
          ctx.textBaseline = 'middle';
          ctx.font = '700 32px "Plus Jakarta Sans", "Inter", sans-serif';
          ctx.fillStyle = '#0B1B3D';
          ctx.fillText(spec, leftMargin + 72, circleY);

          currentY += 68;
        });
        ctx.restore();
        currentY += 14;
      }

      // 5. Action CTA Button (Electric Blue #0066FF Stadium Pill)
      const buttonY = currentY + 18;
      const btnW = Math.min(560, maxLeftContentW);
      const btnH = 92;
      const pillRadius = btnH / 2;

      ctx.save();
      ctx.shadowColor = 'rgba(0, 102, 255, 0.38)';
      ctx.shadowBlur = 28;
      ctx.shadowOffsetY = 10;

      const btnGrad = ctx.createLinearGradient(leftMargin, buttonY, leftMargin + btnW, buttonY + btnH);
      btnGrad.addColorStop(0, '#0066FF');
      btnGrad.addColorStop(1, '#0052CC');
      ctx.fillStyle = btnGrad;
      ctx.beginPath();
      ctx.roundRect(leftMargin, buttonY, btnW, btnH, pillRadius);
      ctx.fill();
      ctx.restore();

      // CTA Text + Arrow →
      ctx.save();
      ctx.font = '800 30px "Plus Jakarta Sans", "Inter", sans-serif';
      ctx.fillStyle = '#FFFFFF';
      ctx.textBaseline = 'middle';
      ctx.fillText(`${(pageData.buttonText || 'DISCOVER OUR SOLUTIONS').toUpperCase()}`, leftMargin + 36, buttonY + btnH / 2 + 2);

      ctx.font = '800 36px "Inter", sans-serif';
      ctx.fillText('→', leftMargin + btnW - 54, buttonY + btnH / 2 + 2);
      ctx.restore();

      // 6. Trust Wordings / Stat Counters (Drawn directly on canvas, NO WHITE FLOATING CARD!)
      const statsY = buttonY + btnH + 45;
      ctx.save();
      const stats = pageData.stats || [
        { num: '15,000+', label: 'Customers Served' },
        { num: '10+', label: 'Years Experience' },
        { num: '4.9★', label: 'Customer Rating' },
      ];

      const colXs = [leftMargin, leftMargin + 280, leftMargin + 540];

      stats.slice(0, 3).forEach((st, idx) => {
        const posX = colXs[idx];

        ctx.font = '900 46px "Plus Jakarta Sans", sans-serif';
        ctx.fillStyle = '#0B1B3D';
        ctx.textBaseline = 'top';
        ctx.fillText(st.num, posX, statsY);

        ctx.font = '600 22px "Inter", sans-serif';
        ctx.fillStyle = '#64748B';
        ctx.fillText(st.label, posX, statsY + 54);
      });
      ctx.restore();

    } else {
      // =========================================================================
      // DESKTOP LANDSCAPE CANVAS TEXTURE (3072 x 1728 RESOLUTION) - UNTOUCHED
      // =========================================================================

      // Soft Radial Ambient Accent Glow on Right Side
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
      let prodH = (img.height / img.width) * prodW;

      if (prodH > maxProdH) {
        prodH = maxProdH;
        prodW = (img.width / img.height) * prodH;
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

      // Draw Product Image
      ctx.save();
      ctx.drawImage(img, prodX, prodY, prodW, prodH);
      ctx.restore();

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

    // Notify texture load & update Three.js CanvasTexture
    texture.needsUpdate = true;
    if (onLoaded) onLoaded(texture);
  };

  return texture;
}




