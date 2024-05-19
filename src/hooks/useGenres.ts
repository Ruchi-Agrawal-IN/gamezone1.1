import Genre from "../data/Genre";
// import useData from "./useData";
export interface Genre {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}

// const useGenres = () => useData<Genre>("/genres");
const useGenres = () => ({ data: Genre, isLoading: false, error: null });
export default useGenres;
