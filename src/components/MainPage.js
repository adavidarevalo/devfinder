import React,{useContext} from 'react'
import generalContext from '../context/generalContext'
import Header from './Header'
import Search from './Search'
import Loading from './Loading'
import Main from './Main'

const MainPage = () =>{
  const {
    backgroundColor, 
    loading,
    DataApi
  } = useContext(generalContext)
  console.log("lOADING", loading)
    return(
    <section className={backgroundColor? 'pageDark' : 'PageLight'}>
      <Header/>
      <Search/>
      {loading && <Loading/>}
      {DataApi && <Main/>}
    </section>    
    )
}

export default MainPage