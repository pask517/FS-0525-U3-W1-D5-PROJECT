import MyStarWarsFilmList from "./MyStarWarsFilmList"
import MyMainNavbar from "./MyMainNavbar"
import MyHarryPotterFilmList from "./MyHarryPotterFilmList"
import MyLordOfTheRingsFilmList from "./MyLordOfTheRingsFilmList"
const MyMain = () => {
  return (
    <main className="bg-dark">
      <MyMainNavbar />
      <MyStarWarsFilmList />
      <MyHarryPotterFilmList />
      <MyLordOfTheRingsFilmList />
    </main>
  )
}
export default MyMain
