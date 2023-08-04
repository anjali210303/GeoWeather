export default function Footer() {
  return (
    <div className='min-h-[15vh] bg-gray-100 dark:bg-gray-900 grid p-5 text-gray-700 dark:text-white grid-cols-1 grid-rows-3 md:grid-rows-1 md:grid-cols-3 place-items-center items-center '>
      <a
        className='font-bold'
        target='_blank'
        href='https://davidhuertas.dev'
        rel='noreferrer'
      >
        
      </a>
      <div className='grid place-items-center'>
        <p>
          Made with ❤️ &nbsp;by{' '}
          <a
            target='_blank'
            href='https://www.linkedin.com/in/anjali-gupta-720376244'
            rel='noreferrer'
          >
            Anjali Gupta
          </a>
        </p>
        
      </div>
      <a
        className='font-bold'
        target='_blank'
        href='https://github.com/anjali210303'
        rel='noreferrer'
      >
        Github
      </a>
    </div>
  )
}
