export const FirFilter = (imageData) => {
    const pixels = imageData.data;
    for (let i = 0; i < (pixels.length-3); i += 4) {
        const r = pixels[i];
        const g = pixels[i + 1];
        const b = pixels[i + 2];
        pixels[i] = (r+g+b)/3; // red
        pixels[i + 1] = (r+g+b)/3; // green
        pixels[i + 2] = (r+g+b)/3; // bLue
    }
    return imageData;
};