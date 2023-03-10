 import style from "./Card.module.css"

 function Card({ name, species, gender, image, onclose }) {
    return (
      <div className={style.container}>
         <button onClick={onclose} className={style.button}>X</button >
         <h2>Name: {name}</h2>
         <h2>Species: {species}</h2>
         <h2>Gender: {gender}</h2>
         <img  src={image} alt="" />
      </div>
   );
}

export default Card;
