import { FC } from "react"

interface OpenAISVGProps {
  height?: number
  width?: number
  className?: string
}

export const OpenAISVG: FC<OpenAISVGProps> = ({
  height = '100%', // default to 100% to fill the container
  width = '100%', // default to 100% to fill the container
  className
}) => {
  return (
    
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 444.000000 432.000000"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth="1.5"
      role="img"
    >
      <g transform="translate(0.000000,432.000000) scale(0.100000,-0.100000)" fill="#800080" stroke="none">
        {/* Insert your paths here */}
        <path d="M0 2160 l0 -2160 703 0 c416 0 707 4 713 9 5 5 25 12 45 16 26 5 39
        2 48 -9 12 -14 156 -16 1472 -16 l1459 0 0 2160 0 2160 -2220 0 -2220 0 0
        -2160z m367 1893 c40 -15 84 -18 273 -18 138 0 265 5 330 14 154 21 366 20
        470 -3 184 -39 320 -147 402 -317 70 -144 117 -331 104 -404 -15 -78 -211
        -205 -396 -255 -117 -33 -316 -33 -438 -1 -148 39 -252 86 -381 175 -68 46
        -205 172 -241 221 -71 95 -96 134 -133 206 -74 143 -123 302 -107 345 8 21 46
        54 62 54 4 0 29 -8 55 -17z m2159 -252 c33 -16 85 -40 116 -54 31 -14 64 -37
        74 -51 21 -33 12 -56 -50 -130 -133 -157 -236 -357 -239 -465 -2 -46 -2 -46
        33 -49 114 -9 308 -47 400 -78 409 -141 736 -475 865 -882 47 -150 65 -279 65
        -473 0 -268 -40 -449 -146 -664 -150 -302 -439 -560 -754 -674 -165 -59 -286
        -78 -510 -80 -292 -2 -479 38 -690 148 -112 58 -142 77 -233 150 -288 232
        -469 561 -509 925 -14 135 -5 419 17 516 99 431 342 754 718 954 77 41 279
        116 312 116 12 0 15 14 15 61 0 128 84 349 199 524 25 38 82 107 126 153 92
        95 102 97 191 53z"/> 
        <path d="M1064 3913 c-12 -2 -124 -12 -250 -21 l-228 -17 65 -41 c145 -93 433
        -244 464 -244 3 0 25 -8 48 -19 66 -29 97 -34 97 -16 0 8 -4 23 -10 33 -10 18
        -85 232 -102 295 -11 38 -22 42 -84 30z"/>
        <path d="M1290 3913 c0 -5 23 -73 51 -153 28 -80 60 -174 72 -210 l22 -65 50
        -11 c75 -17 172 -33 243 -40 74 -8 74 -8 38 108 -48 155 -134 271 -238 324
        -70 35 -238 68 -238 47z"/>
        <path d="M470 3775 c0 -27 138 -235 156 -235 27 0 164 33 164 40 0 4 -12 12
        -27 19 -27 12 -224 134 -270 167 -13 9 -23 13 -23 9z"/>
        <path d="M979 3476 c-5 -6 -142 -40 -212 -53 -35 -7 -25 -20 53 -73 141 -96
        306 -149 485 -157 128 -6 246 17 342 66 l58 29 -40 7 c-216 35 -372 74 -530
        135 -124 47 -148 54 -156 46z"/>
        <path d="M2383 3583 c-79 -99 -149 -219 -182 -309 -23 -63 -53 -222 -42 -228
        3 -2 32 -1 64 1 l57 5 0 59 c0 117 87 299 236 495 l26 34 -23 9 c-67 25 -63
        27 -136 -66z"/>
        <path d="M2265 2899 c-108 -8 -208 -24 -265 -41 -252 -77 -405 -164 -563 -322
        -168 -168 -264 -346 -329 -611 -19 -77 -22 -119 -22 -295 -1 -181 2 -217 23
        -310 107 -469 438 -818 894 -939 200 -54 524 -54 724 0 465 124 802 486 899
        964 26 125 26 422 1 550 -66 333 -246 609 -517 793 -72 50 -124 78 -245 133
        -34 16 -188 59 -209 59 -16 0 -10 -11 35 -57 187 -195 295 -384 392 -688 8
        -27 26 -106 39 -175 20 -107 23 -156 22 -340 -1 -227 -13 -323 -66 -515 -30
        -109 -41 -125 -88 -125 -68 0 -84 44 -54 150 9 30 27 111 41 180 46 232 32
        566 -34 785 -99 330 -264 578 -511 768 -33 26 -62 46 -64 46 -2 -1 -48 -5
        -103 -10z m668 -2041 c26 -31 22 -82 -9 -107 -48 -38 -104 -24 -123 30 -28 81
        76 143 132 77z m-122 -201 c20 -15 39 -51 39 -72 0 -25 -55 -75 -83 -75 -41 0
        -77 36 -77 78 0 65 72 107 121 69z"/>
        {/* Repeat for all paths you need from your SVG file */}
      </g>
    </svg>
  )
}
