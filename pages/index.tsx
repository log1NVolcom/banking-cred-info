import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import BackgroundImage from '../public/credito.webp';
import HeaderLogo from '../public/headerLogo.png';
import CardImage from '../public/cardImage.jpg'
import InstaIcon from '../public/instagram.svg'

export default function Home() {
    return (
        <>
            <Head>
                <title>Crédito Aprovado</title>
                <meta name="description" content="Crédito aprovado" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                <div className='flex justify-between items-center p-4 sticky top-0 bg-white z-10 h-15 '>
                    <Link href='#home'>
                        <Image src={HeaderLogo} alt="crédito aprovrado" height={50} />
                    </Link>

                    <div className='flex gap-3'>
                        <Link href='#introduction'>
                            <span className='link-underline link-underline-black font-semibold text-neutral-500 hover:text-black p-1'>Quem somos</span>
                        </Link>
                        <Link href='#services'> <span className='link-underline link-underline-black font-semibold text-neutral-500 hover:text-black p-1'>Os nossos serviços</span></Link>
                        <Link href='#follow'> <span className='link-underline link-underline-black font-semibold text-neutral-500 hover:text-black p-1'>Seguir</span></Link>
                        <Link href='#ask-us'> <span className='link-underline link-underline-black font-semibold text-neutral-500 hover:text-black p-1'>Fale connosco</span></Link>
                    </div>
                </div>
                <div id="home" className='h-[calc(100vh-5rem)] pb-10'>
                    <Image src={BackgroundImage} alt='background-image' className='h-full' />

                    <div className='absolute right-1/2 translate-x-1/2   bottom-1/2  translate-y-1/2  flex flex-col gap-10 items-center' >
                        <h1 className='text-8xl font-bold text-sky-400 text-center'>Crédito <br />  Aprovado</h1>
                        <Link href='#ask-us' className='text-white font-bold bg-zinc-700 py-3 px-16 rounded-lg hover:bg-black '>Saiba mais</Link>
                    </div>
                </div>



                <div id='introduction' className=' p-20'>
                    <div className='flex flex-col gap-12 justify-center'>
                        <h2 className='font-bold text-5xl text-center' >Quem somos</h2>
                        <div className='flex justify-center w-2/3 mx-auto'>
                            <span className='text-center text-slate-500  text-lg'>
                                O seu intermediário de crédito com soluções adequadas ao seu perfil. Somos os melhores no nosso segmento, e é tudo graças aos relacionamentos incríveis que formamos com nossos clientes. Para isso, prestamos serviços de qualidade e estamos à disposição 24 horas por dia, 7 dias por semana. <br />
                                Entre em contato conosco quando estiver pronto para saber mais. Teremos o prazer de conhecê-lo!
                            </span>
                        </div>
                        <div className='flex justify-center'>
                            <Link href='#ask-us' className='text-white font-bold bg-zinc-700 p-3 rounded-lg hover:bg-black w-48 text-center'>Saiba mais</Link>
                        </div>
                    </div>
                </div>


                <div id='services' className='flex flex-col gap-20 py-20 px-14 '>
                    <h2 className='font-bold text-5xl text-center' >Os nossos serviços</h2>

                    <div className='flex gap-5 justify-center'>
                        <div className='flex flex-col gap-5 border-slate-500 border w-96'>
                            <Image src={CardImage} alt='credito aprovado' className=' w-full h-72' />

                            <div className='flex flex-col gap-3 p-2'>
                                <h3 className='font-bold text-2xl'>Crédito Habitação</h3>
                                <div>
                                    <p className='text-slate-500 text-lg'>
                                        Novo Crédito Habitação
                                    </p>
                                    <p className='text-slate-500 text-lg'>
                                        Transferência de Crédito Habitação
                                    </p>
                                    <p className='text-slate-500 text-lg'>
                                        Crédito à Construção/Reconstrução
                                    </p>
                                </div>
                                <Link href='#ask-us' className='text-white font-bold bg-zinc-700 p-3 rounded-lg hover:bg-black w-48 text-center'>Saiba mais</Link>
                            </div>
                        </div>

                        <div className='flex flex-col gap-5 border-slate-500 border  w-96'>
                            <Image src={CardImage} alt='credito aprovado' className=' w-full h-72' />

                            <div className='flex flex-col gap-3 p-2'>
                                <h3 className='font-bold text-2xl'>Crédito Habitação</h3>
                                <div>
                                    <p className='text-slate-500 text-lg'>
                                        Novo Crédito Habitação
                                    </p>
                                    <p className='text-slate-500 text-lg'>
                                        Transferência de Crédito Habitação
                                    </p>
                                    <p className='text-slate-500 text-lg'>
                                        Crédito à Construção/Reconstrução
                                    </p>
                                </div>
                                <Link href='#ask-us' className='text-white font-bold bg-zinc-700 p-3 rounded-lg hover:bg-black w-48 text-center'>Saiba mais</Link>
                            </div>
                        </div>

                    </div>

                </div>
                <div id='follow' className='p-28 bg-gray-300'>
                    <Link href="https://www.instagram.com/_creditoaprovado/" target="_blank">
                        <div className='flex gap-10 justify-center items-center'>
                            <h2 className='text-5xl font-bold'>Seguir</h2>
                            <Image src={InstaIcon} alt="instagram" />
                        </div>
                    </Link>
                </div>

                <div id='ask-us' className='h-screen p-20'>
                    <div className='flex flex-col gap-14 items-center'>
                        <h2 className='text-5xl font-bold text-center'>Fale connosco</h2>

                        <span className='text-slate-500 text-xl text-center'>
                            Estamos disponíveis para ajudar! Envie-nos quaisquer perguntas que você tiver. Esperamos receber notícias suas.
                        </span>

                        <form className='px-14 flex flex-col gap-7 w-full lg:w-1/2'>
                            <div className='flex gap-7 flex-col md:flex-row'>
                                <div className='w-full flex flex-col gap-3'>
                                    <label htmlFor="name" className='text-slate-500 text-lg'>Name</label>
                                    <input type="text" id="name" name="name" className='border-b border-black font-semibold p-1' />
                                </div>
                                <div className='w-full  flex flex-col gap-3'>
                                    <label htmlFor='telefone' className='text-slate-500 text-lg'>Telefone</label>
                                    <input type="tel" id="telefone" name="telefone" className='border-b border-black font-semibold p-1' />
                                </div>
                            </div>
                            <div className='w-full flex flex-col gap-3'>
                                <label htmlFor="email" className='text-slate-500 text-lg' >O email</label>
                                <input type="email" id="name" name="name" className='border-b border-black font-semibold p-1' />
                            </div>
                            <div className='w-full flex flex-col gap-3'>
                                <label htmlFor="mensagem" className='text-slate-500 text-lg'>Mensagem</label>
                                <textarea id="name" name="name" className='border-b border-black font-semibold p-1' />
                            </div>
                            <Link href='#ask-us' className='text-white font-bold bg-zinc-700 p-5 rounded-lg hover:bg-black text-center'>Saiba mais</Link>
                        </form>

                    </div>
                </div>
            </div>
        </>
    )
}
