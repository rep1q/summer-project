export const SecFilter = (imageData, value = 10) => {

    const pixels = imageData.data;
    const k = value/10
    for (let i = 0; i < (pixels.length-3); i += 4) {
        const r = (pixels[i]/255)-0.5;
        const g = (pixels[i + 1]/255)-0.5;
        const b = (pixels[i + 2]/255)-0.5;

        pixels[i] = (r*k+0.5)*255; // red
        pixels[i + 1] = (g*k+0.5)*255; // green
        pixels[i + 2] = (b*k+0.5)*255; // bLue
    }
    return imageData;
};