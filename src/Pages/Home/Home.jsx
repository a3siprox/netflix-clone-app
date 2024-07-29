// import React from "react";
// import Header from "../../components/Header/Header";
// import Footer from "../../components/Footer/Footer";
// import Banner from "../../components/Banner/Banner";
// import Row from "../../components/Row/Row.jsx";
// import requests from "../../components/utils/requests.js";

// function Home() {
// 	return (
// 		<>
// 			<Header />
// 			<Banner />
// 			<Row title="Trending Now" fetchUrl={requests.fetchTrending} isLargeRow />
// 			<Row
// 				title="Netflix Originals"
// 				fetchUrl={requests.fetchNetflixOriginals}
// 			/>
// 			<Row title="Top Rated" fetchUrl={requests.fetchTopRatedMovies} />
// 			<Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
// 			<Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
// 			<Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
// 			<Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
// 			<Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
// 			<Footer />
// 		</>
// 	);
// }

// export default Home;

import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Banner from "../../components/Banner/Banner";
import Row from "../../components/Row/Row";
import requests from "../../components/utils/requests"; // Import the requests object

function App() {
	return (
		<>
			<Header />
			<Banner />
			<div className="App">
				<Row title="Trending" fetchUrl={requests.fetchTrending} isLargeRow />
				<Row
					title="Netflix Originals"
					fetchUrl={requests.fetchNetflixOriginals}
					isLargeRow
				/>
				<Row title="Top Rated" fetchUrl={requests.fetchTopRatedMovies} />
				<Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
				<Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
				<Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
				<Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
				<Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
			</div>
			<Footer />
		</>
	);
}

export default App;
