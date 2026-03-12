"use client";

const NationalParks = () => {
  return (
    <section className="mapSection">
      <div className="mapSectionMain">
        <div className="mapSectionTop">
          <div className="container">
            <h2>
              <span>Azerbaijan</span> National Parks
            </h2>
            <div className="mapDescription">
              <p>
                Currently in Azerbaijan, 12 national parks, 9 state nature
                reserves, and 24 state nature sanctuaries together cover 11.59%
                of the country’s territory. A further 14.02% of the land area
                belongs to the Forest Fund. Overall, specially protected natural
                areas account for 25.61% of the country’s territory.
              </p>
            </div>
          </div>
        </div>
        <div className="map"></div>
      </div>
    </section>
  );
};

export default NationalParks;
