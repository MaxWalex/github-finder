import UserResults from "./UserResults/UserResults";
import FinderForm from "./FinderForm/FinderForm";

function Main() {
   
  return (
    <main>
      <div className='container'>
        <FinderForm />
      </div>

      <div className="container">
        <UserResults/>
      </div>
    </main>
  )
}

export default Main