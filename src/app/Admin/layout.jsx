
import Menu from "./Componentes/Menu";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
  <head>
  </head>
      <body>
        <div className="title">
          <h2>Administracion de Contenido</h2>
        </div>
        <div className="admin">
        <Menu/>
        {children}
        </div>
        </body>
    </html>
  )
}