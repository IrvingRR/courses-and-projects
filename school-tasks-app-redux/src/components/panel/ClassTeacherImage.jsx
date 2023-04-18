const teahcerMan = 'https://cdn-icons-png.flaticon.com/512/4792/4792929.png';
const teahcerWoman = 'https://cdn-icons-png.flaticon.com/512/4794/4794939.png';

export const ClassTeacherImage = ({ image, gender, alt }) => {
  
    if(image) return <img src={image} alt={alt}/>

    if(!image && gender === 'woman') return <img src={teahcerWoman} alt={alt}/>

    if(!image && gender === 'man') return <img src={teahcerMan} alt={alt}/>

}
