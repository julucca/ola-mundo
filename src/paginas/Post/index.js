import "./Post.css";
import React from "react";
import { Route, Routes, useParams } from "react-router-dom";
import posts from "json/posts.json";
import PostModelo from "componentes/PostModelo";
import ReactMarkdown from "react-markdown";
import NaoEncontrada from "paginas/NaoEncontrada";
import PaginaPadrao from "componentes/PaginaPadrao";

export default function Post() {
  const parametros = useParams();

  const post = posts.find((post) => {
    return post.id === Number(parametros.id);
  });

  if (!post) {
    return <NaoEncontrada />;
  }

  return (
    // Solução 1 = usar children em PaginaPadrao
    <PaginaPadrao>
      <PostModelo
        fotoCapa={`/assets/posts/${post.id}/capa.png`}
        titulo={post.titulo}
      >
        <div className="post-markdown-container">
          <ReactMarkdown>{post.texto}</ReactMarkdown>
        </div>
      </PostModelo>
    </PaginaPadrao>

    // Solução 2 = usar Routes descendente
    // <Routes>
    //   <Route path="*" element={<PaginaPadrao />}>
    //     <Route index element={
    //         <PostModelo
    //           fotoCapa={`/assets/posts/${post.id}/capa.png`}
    //           titulo={post.titulo}
    //         >
    //           <div className="post-markdown-container">
    //             <ReactMarkdown>
    //               {post.texto}
    //             </ReactMarkdown>
    //           </div>
    //         </PostModelo>
    //     }/>
    //   </Route>
    // </Routes>
  );
}
