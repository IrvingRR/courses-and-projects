export const generateRandomColor = () => {

    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    let alpha = Math.floor(Math.random() * 990);

    const generatedColor = `rgb(${red}, ${green}, ${blue})`;
    
    return generatedColor;

};