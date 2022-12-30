import { useContext } from "react";
import Context from "../../../context/Context";

function FinderForm() {

  const {
      setSerchText, 
      searchText, 
      handleClickSearch, 
      handleClickClear, 
      cleanUsers,
      error} = useContext(Context)

  return (
    <form>
      <input 
        placeholder='Search' 
        value={searchText}
        onChange={e => setSerchText(e.target.value)}
        style={{border: !error ? '1px solid transparent' : '1px solid red'}}
        />
      <button onClick={(e) => handleClickSearch(e, searchText)}>Go</button>
      {cleanUsers && <button onClick={e => handleClickClear(e)}>Reset</button>}
    </form>
  )
}

export default FinderForm