

async function loadCategory() {

  const res = await fetch('http://localhost:3000/api/tasks', {cache: 'no-store'})
  const data = await res.json()
  //console.log(data)
  return data
}
async function Categorias () {
  const tasks = await loadCategory();
    return (
      <section className="category">
        
        <div id="carousel" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
          {tasks.map((tasks) => (
            
              <div className="row" id="btncategory"  key={tasks.id}>
               <a href={"/Comercial/new/"+tasks.id}> <button className="btn btn-primary" hr type="submit">{tasks.nombre}</button></a>
              </div>
            ))}
          </div>
          </div>
          
          </section>
    );
          }
export default Categorias