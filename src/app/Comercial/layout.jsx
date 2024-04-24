import Carrusel from "./componentes/Carrusel";
import Categorias from "./componentes/Categorias";
import Navbar from "./componentes/Navbar";
import Publicacion from "./componentes/Publicacion";
import GaleryCatag from "./componentes/GaleryCatag";
import Cuponera from "./componentes/Cuponera";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
  <head>
 
    {/* <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script> */}

    {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script> */}
    {/* <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script> */}
  </head>
      <body>
        <Navbar/>
        <Carrusel/>
        <GaleryCatag/>
        <div className='cuerpo'>
        <Publicacion/>
        <Cuponera/>
        </div>
        {children}
        </body>
    </html>
  )
}
