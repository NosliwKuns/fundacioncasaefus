import style from './heroSection.module.css'

interface Props {
  className: string
  children: React.ReactNode
}
const TripleText = ({ className, children }: Props) => {

  const textStoke = `hidden lg:block text-stroke ${style['text-stroke']}`

  return (
    <div className={`${className} absolute top-1/2 -translate-y-1/2 -rotate-90 lg:rotate-0 text-[20vw] md:text-[15vw] lg:text-[10vw] font-jomhuria leading-[70px] -z-10`}>
        <h2 className={textStoke}>
          { children }
        </h2>
        <h2 className="text-white">{ children }</h2>
        <h2 className={textStoke}>
          { children }  
        </h2>
    </div>
  )
}

export default TripleText