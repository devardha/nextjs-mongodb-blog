import Head from 'next/head'

export default (props) => {
  return(
      <div>
          <Head>
              <title>404 - Page Not Found</title>
          </Head>
          <div className="page-container">
              <h1 className="error-code">404</h1>
              <h3 className="error-message">Maap, salah alamat</h3>
          </div>
          <style jsx>{`
          .page-container{
              height:100vh;
              width:100%;
              background-color:#000;

              display:flex;
              flex-direction:column;
              justify-content:center;
              align-items:center
          }
          h1, h3{
              color: #fff;
          }
          .error-code{
              font-size:10rem;
          }
          .error-message{
              text-transform:uppercase;
              font-weight:800;
              font-size:1.1rem;
          }
          
          `}</style>
      </div>
  )
}