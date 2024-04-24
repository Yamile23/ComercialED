export default function HomePage(){
  return(
    <div>

      <a href={"/Admin"}> <button className="btn btn-primary"  type="submit">Administracion</button></a>
      <a href={"/Comercial"}> <button className="btn btn-primary"  type="submit">Comercial</button></a>

    </div>
  )
}
