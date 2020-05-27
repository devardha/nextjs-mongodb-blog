import Layout from '../components/Layout'
import Head from 'next/head'

export default function(){

    return(
        <Layout>
            <Head>
                <title>devArdha Official Blog - About</title>
            </Head>
            <div className="content">
                <div className="about-page">

                <div className="blog-post">
                    <div className="post-header">
                        <h1 className="post-title">About</h1>
                    </div>
                    <div className="post-body">
                        {/* <img src={props.img} alt=""/> */}
                        <p>
                            Halo nama gue Ardha Yudhatama. Gue merupakan seorang Full-Stack Web Developer asal Semarang yang sekarang sedang menempuh pendidikan S1 jurusan Teknik Informatika di Universitas Semarang. Dan sekarang gue alhamdulillah udah ada di semester 2, masih ada 6 semester lagi sebelum lulus. Doakan saja hehe.<br/>
                            <br/>
                            Gue mulai suka web development sejak lulus SMA. Saat itu gue lagi nggak tau mau ngapain dan temen SMP gue (errbint) tiba-tiba ngajakin untuk belajar HTML karna pengin membuat website. Lalu dimulailah perjalanan gue mengarungi dunia web development.<br/>
                            <br/>
                            Gue mengawalinya dengan belajar front-end, karena gue suka banget sama desain-mendesain tampilan web. Dan kemudian mulai sedikit bergerak ke backend karena terpengaruh sama temen gue yang saat itu belajar PHP. Namun lama-kelamaan gue nggak terlalu nyaman sama PHP nggak tau kenapa, jadi gue putuskan untuk pindah bahasa. Dan bahasa yang gue pilih adalah JavaScript.<br/>
                            <br/>
                            Kenapa javascript? Karna gue emang cinta aja sama javascript. Javascript itu bahasa pemrograman pertama yang gue pelajari dan langsung nyaman saat makainya. Dan di front-end kebanyakan juga berkutat dengan javascript (entah menggunakan framework atau vanilla javascript). Jadi sekalian aja gue memutuskan untuk mendalami Full-Stack Javascript. Kalo gue biasanya pakai MERN Stack.<br/>
                        </p>
                    </div>
                </div>
                </div>
            </div>
            <style jsx>{`
            
            .about-page{
                display:flex;
                flex-direction:column;
                width:100%;
                padding:70px 20% 50px 20%;
                text-align:center;
            }
            .post-title{
                font-family:"Open Sans",sans-serif;
            }
            .calendar-icon{
                margin-left:10px;
            }
            .blog-post{
                margin-bottom:70px;
                padding-bottom:70px;
                border-bottom:2px solid #eee;
            }
            img{
                margin-top:5px;
                margin-bottom:1.25rem;
            }
            .author-name{
                font-size:1rem;
                font-family: 'Open Sans', sans-serif;
                margin-top:10px;
                color:#000;
            }
            .author-name{
                display: flex;
                justify-content: center;
            }
            .post-body{
                margin-top:20px;
            }
            .post-body p{
                text-align:justify;
                text-indent:2rem;
                line-height: 30px;
            }
            
            `}</style>
        </Layout>
    )
}