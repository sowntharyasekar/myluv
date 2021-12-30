import React, { useState, useEffect } from "react";
import "../admin/background.css";
import Recipe from "../admin/pages/Recipe";
import { withTranslation} from 'react-i18next';
import { useTranslation } from 'react-i18next';
const Home = ({handleAddProducts}) => {
  const [posts, setPosts] = useState([]);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    Recipe.get("./recipe.json")
      .then((res) => {
        const posts = [];

        for (let key in res.data) {
          posts.push({
            ...res.data[key],
          });
        }
        console.log(res);
        setPosts(posts);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
 
  return (
    <div>
      <div class="container-fluid shadow pt-3 bg-dark">
        <h1 class="text-center text-success font-italic">{t('Food Items')}</h1>
      </div>
      <div class="container-fluid  pt-3">
        <div class="row m-0">
          
            {posts.map((post) => (
                <div class="col-md-3"  style={{padding:"10px"}}>
              <div class="card  shadow" key={post.id}>
                <img
                  class="card-img-top img-fluid"
                  src={post.image}
                  alt="Card image cap"
                style={{height:"200px"}}
                 
                  
                />
                <div class="card-body">
                  <h5 class="card-title">{post.name}</h5>
                  <h3 class="card-title text-success">{t('Rs')}.{post.cost}</h3>
                  <p class="card-text">{post.type}</p>
                </div>
                <button  class="btn btn-dark" onClick={()=>handleAddProducts(post)}>
                 {t(' Add to cart')}
                </button>
              </div>
              </div>
            ))}
          
        </div>
      </div>
    </div>
  );
};
export default  Home;
