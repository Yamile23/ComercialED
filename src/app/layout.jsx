import './globals.css'
import '/public/style/normalize.css'
import '/public/style/style.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'flowbite';


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>

        {/* <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script> */}

        <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.css" rel="stylesheet" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js"></script>
        <script src="../path/to/flowbite/dist/flowbite.min.js"></script>


      </head>
      <body>
        {children}
        

      </body>

    </html>
  )
}
