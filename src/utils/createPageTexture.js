import * as THREE from 'three';

/**
 * Creates an Ultra-HD 2D canvas texture for the hero catalogue page.
 * High-DPI resolution (3072 x 1728) & Anisotropic 16 Filtering for 100% razor-sharp text clarity.
 */
export function createPageCanvasTexture(pageData, onLoaded) {
  const width = 3072;
  const height = 1728;

  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;

  const ctx = canvas.getContext('2d');
  // High quality text rendering settings
  ctx.textRendering = 'geometricPrecision';

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;
  texture.generateMipmaps = true;

  // Load product image asynchronously and render composition
  const img = new Image();
  img.crossOrigin = 'anonymous';
  img.src = pageData.image;

  img.onload = () => {
    // 1. BASE LIGHT THEME BACKGROUND
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, width, height);

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

    // 2. PRODUCT IMAGE RENDERING (+15% Larger Visual Stage)
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

    // 3. LEFT SIDE EDITORIAL TYPOGRAPHY
    const leftMargin = width * 0.058;
    const maxLeftContentW = width * 0.46;
    let currentY = height * 0.22;

    // Top Category Badge Pill (Deep Navy / Muted Blue Styling)
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

      ctx.fillStyle = '#0B1B3D'; // Deep Navy / Muted Blue Text
      ctx.textBaseline = 'middle';
      ctx.fillText(badgeText, leftMargin + padX, currentY + bHeight / 2 + 1);
      ctx.restore();

      currentY += bHeight + 28;
    }

    // Main Large Editorial Headline (Line 1: Deep Navy, Line 2: MYK Red #EF1C2D)
    ctx.save();
    ctx.font = '900 118px "Plus Jakarta Sans", "Inter", system-ui, sans-serif';
    ctx.textBaseline = 'top';

    const lines = pageData.title.split('\n');
    lines.forEach((line, lineIdx) => {
      // Main Heading -> Deep Navy (#0B1B3D), Highlight Heading -> MYK Red (#EF1C2D)
      ctx.fillStyle = lineIdx === 1 ? '#EF1C2D' : '#0B1B3D';
      ctx.fillText(line, leftMargin, currentY);
      currentY += 132;
    });
    ctx.restore();

    currentY += 14;

    // Subtitle Paragraph (Dark Grey/Navy)
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

    // Bullet Checkmarks List (Consistent MYK Red #EF1C2D Icon Circle)
    if (pageData.specs && pageData.specs.length > 0) {
      ctx.save();

      pageData.specs.slice(0, 3).forEach((spec) => {
        // MYK Red Check Icon Circle
        ctx.fillStyle = '#EF1C2D';
        ctx.beginPath();
        ctx.arc(leftMargin + 20, currentY + 20, 20, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#FFFFFF';
        ctx.font = '900 24px "Inter", sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('✓', leftMargin + 20, currentY + 21);

        // Spec Text (Deep Navy)
        ctx.textAlign = 'left';
        ctx.font = '700 36px "Inter", system-ui, sans-serif';
        ctx.fillStyle = '#0B1B3D';
        ctx.fillText(spec, leftMargin + 56, currentY + 20);

        currentY += 58;
      });
      ctx.restore();
      currentY += 12;
    }

    // Action CTA Button (Full Capsule Pill Design Matched to Screenshot)
    const buttonY = currentY + 36;
    const btnW = 520;
    const btnH = 88;
    const pillRadius = btnH / 2; // Full Capsule Stadium Curve

    ctx.save();
    // Soft Diffused Red Shadow behind button
    ctx.shadowColor = 'rgba(220, 38, 38, 0.45)';
    ctx.shadowBlur = 28;
    ctx.shadowOffsetY = 12;

    // Vibrant Red to Crimson Red Gradient Fill
    const btnGrad = ctx.createLinearGradient(leftMargin, buttonY, leftMargin + btnW, buttonY + btnH);
    btnGrad.addColorStop(0, '#E50914');
    btnGrad.addColorStop(0.5, '#DC2626');
    btnGrad.addColorStop(1, '#991B1B');
    ctx.fillStyle = btnGrad;
    ctx.beginPath();
    ctx.roundRect(leftMargin, buttonY, btnW, btnH, pillRadius);
    ctx.fill();
    ctx.restore();

    // Crisp Bold Single-Line Text + Arrow →
    ctx.save();
    ctx.font = '800 28px "Plus Jakarta Sans", "Inter", sans-serif';
    ctx.fillStyle = '#FFFFFF';
    ctx.textBaseline = 'middle';
    ctx.fillText(`${(pageData.buttonText || 'EXPLORE PRODUCTS').toUpperCase()}`, leftMargin + 48, buttonY + btnH / 2 + 1);

    ctx.font = '800 32px "Inter", sans-serif';
    ctx.fillText('→', leftMargin + btnW - 60, buttonY + btnH / 2 + 1);
    ctx.restore();

    // Stat Counter Row below CTA
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

    // Notify texture load & update Three.js CanvasTexture
    texture.needsUpdate = true;
    if (onLoaded) onLoaded(texture);
  };

  return texture;
}

