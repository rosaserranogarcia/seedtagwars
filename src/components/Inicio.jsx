import '../styles/layout/App.css'
const throwDice = ["cookie, frog, frogEgg, grogu"];
throwDice.forEach((dado) => {
        console.log(dado); 
      });


const Action = () => {

    

    return (
        <div className="body-app">
            <div className="rulesContainer_title text-center">
                
            <h1>Hola soy Action</h1>

            </div>
        </div>

    );


}
export default Action;