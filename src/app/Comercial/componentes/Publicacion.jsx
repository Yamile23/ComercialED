'use client'
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { format } from "date-fns";



function Publicacion() {
    const router = useRouter();
    const parmas = useParams();
    const [Lista, setLista] = useState([]);
    var aux="";

    useEffect(() => {
        const getTodos = async () => {
            const res = await fetch('http://localhost:3000/api/publicaciones', { cache: 'no-store' })
            const data = await res.json() // trae toda la lista de publicaciones
            setLista(data)
            debugger;
            if (parmas.id) {
                const response = await fetch('/api/publicaciones/categoria/' + parmas.id)

                const data = await response.json()
                setLista(data); // verifica si tiene parametro del id de categoria para poder traer todas las publicaciones con esa categoria
            }
        };
        getTodos();
    }, []);

    return (
        <div class="container">
            {Lista.map((tasks) => (

                <div class="row" id="items">
                    <div id="template-card">
                        <div class="card" id="card-content" key={tasks.id}>
                            <div class="row g-0" id="content-text">
                                <div class="col-md-4">
                                    <img src={tasks.arte} class="temcardimg" alt="" />
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <small class="text-body-secondary" id="publicacion"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-hourglass-split" viewBox="0 0 16 16">
                                            <path d="M2.5 15a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1zm2-13v1c0 .537.12 1.045.337 1.5h6.326c.216-.455.337-.963.337-1.5V2zm3 6.35c0 .701-.478 1.236-1.011 1.492A3.5 3.5 0 0 0 4.5 13s.866-1.299 3-1.48zm1 0v3.17c2.134.181 3 1.48 3 1.48a3.5 3.5 0 0 0-1.989-3.158C8.978 9.586 8.5 9.052 8.5 8.351z" />
                                        </svg><p id="publitext" >{format(tasks.createIn, 'dd/MM/yyyy')}</p></small>
                                        <h5 class="card-title">{tasks.titulo}</h5>
                                        <p class="card-text" id="detalle">{tasks.detalle}</p>
                                        <div class="contdia">
                                            
                                            <p class="card-text"><small class="text-body-secondary" id="promo">{format(tasks.finalpublic, 'dd/MM/yyyy')}</small></p>
                                        </div>
                                        <div class="card-btn">
                                            <a href="#" class="btn btn-success" id="btncatalogo">Ver Catalogo</a>
                                            <a href={tasks.link} class="btn btn-success" id="btnpublic">Ver Oferta</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            ))}

        </div>
    );
}
export default Publicacion;
