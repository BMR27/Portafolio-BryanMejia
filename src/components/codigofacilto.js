import React from "react";
import { useStaticQuery, grap, graphql } from "gatsby";
import Posts from "./posts";
import Certificate from "./certificate";
import Course from "./course";


export default () => {
    const data = useStaticQuery(graphql`{
        codigofacilitoJson{
            data{
                certificates{
                    title
                   
                }
                courses {
                    title
                    url
                }
            }
        }
    }`);

    console.log(data)    
    return (
        <section> 
            <div className = "mt-24">
                <div clasName="max-w-4xl mx-auto">
                  <Posts
                   data={data.codigofacilitoJson.data.certificates} 
                   card={Course}
                   title="Mis Certificados en Plataformas Online" />
                    <br/>
                  <Posts
                   data={data.codigofacilitoJson.data.courses} 
                   card={Certificate}
                   title="Mis Cursos en Plataformas Online" />

                </div>
            </div>
        </section>
    );
}