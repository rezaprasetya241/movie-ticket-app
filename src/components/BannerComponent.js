import React from "react";
import "react-slideshow-image/dist/styles.css";
import { Fade } from "react-slideshow-image";
function BannerComponent() {
  const imageSlider = [
    {
      id: 0,
      title: "Fast X",
      description:
        "Dom Toretto dan keluarganya menjadi sasaran putra gembong narkoba Hernan Reyes yang pendendam.",
      release_date: "2023-05-17",
      poster_url:
        "https://assets-us-01.kc-usercontent.com/a7507759-f4f5-0038-8fff-c1db251108c1/05c336bc-05b5-40b4-af72-b52d26902cbf/KV%20rewards%20genflix_WEB-BANNER.jpg",
      age_rating: 15,
      ticket_price: 53000,
    },
    {
      id: 1,
      title: "John Wick: Chapter 4",
      description:
        "ohn Wick mengungkap jalan untuk mengalahkan The High Table. Tapi sebelum dia bisa mendapatkan kebebasannya, Wick harus berhadapan dengan musuh baru dengan aliansi kuat di seluruh dunia dan kekuatan yang mengubah teman lama menjadi musuh.",
      release_date: "2023-03-22",
      poster_url:
        "https://asset.tix.id/microsite_v2/ee11b192-62b9-4718-a229-63dbdbeb164c.jpeg",
      age_rating: 10,
      ticket_price: 60000,
    },
    {
      id: 2,
      title: "The Super Mario Bros. Movie",
      description:
        "Ketika sedang bekerja di bawah tanah untuk memperbaiki pipa air, Mario dan Luigi, yang merupakan tukang ledeng dari Brooklyn, tiba-tiba terhisap ke dalam pipa misterius dan masuk ke dunia yang sangat berbeda. Mereka berada di tempat yang ajaib dan aneh. Tapi sayangnya, mereka terpisah satu sama lain. Mario memulai petualangan besar untuk mencari dan menemukan Luigi.",
      release_date: "2023-04-05",
      poster_url:
        "https://asset.tix.id/microsite_v2/19455bc7-563f-45ef-a9f3-2d49fe18aea5.jpeg",
      age_rating: 14,
      ticket_price: 49000,
    },
  ];
  return (
    <div className="slide-container mt-8">
      <Fade>
        {imageSlider.map((image, index) => (
          <div key={index}>
            <div
              className=" w-[100%] h-[150px] lg:h-[500px] bg-no-repeat  bg-cover bg-center rounded-3xl"
              style={{ backgroundImage: `url(${image.poster_url})` }}
            ></div>
          </div>
        ))}
      </Fade>
    </div>
  );
}

export default BannerComponent;
