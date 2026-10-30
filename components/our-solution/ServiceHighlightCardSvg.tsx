import React from 'react'

interface ServiceHighlightCardSvgProps {
  slug: string
  title?: string
  description?: string
}

const CARD_TEXT_BY_SLUG: Record<
  string,
  {
    title: string
    lines: [string, string, string]
  }
> = {
  'enterprise-solution': {
    title: 'Beyond Generic Solutions',
    lines: [
      'We avoid rigid, one-size-fits-all platforms. Every ERP module is',
      'custom-engineered to align with your corporate governance, internal',
      'workflows, and long-term expansion goals.',
    ],
  },
  'data-ai-integration': {
    title: 'Beyond Static Analytics',
    lines: [
      'We move past basic dashboards. Our custom deep learning models',
      'and data pipelines are built specifically to adapt to your unique',
      'business logic and industry ecosystem.',
    ],
  },
  'smart-iot-system': {
    title: 'Beyond Standard Automation',
    lines: [
      'We do not use generic plug-and-play tools. Each device architecture',
      'is securely tailored to your physical infrastructure, security',
      'protocols, and operational requirements.',
    ],
  },
  'digital-development': {
    title: 'Beyond Template Builds',
    lines: [
      'We reject cookie-cutter templates. Every digital platform is',
      'custom-coded from the ground up to guarantee optimal performance,',
      'robust security, and seamless brand alignment.',
    ],
  },
}

export function ServiceHighlightCardSvg({
  slug,
  title,
}: ServiceHighlightCardSvgProps) {
  const cardData =
    CARD_TEXT_BY_SLUG[slug] ?? CARD_TEXT_BY_SLUG['enterprise-solution']
  const resolvedTitle = title ?? cardData.title

  return (
    <svg
      viewBox="0 0 1029 272"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      role="img"
      aria-label={`${resolvedTitle} — ${cardData.lines.join(' ')}`}
      className="mt-3 w-full max-w-[920px] h-auto block"
    >
      <rect
        x="0.5"
        y="0.5"
        width="1028"
        height="271"
        rx="31.5"
        fill="white"
        fillOpacity="0.44"
      />
      <rect
        x="0.5"
        y="0.5"
        width="1028"
        height="271"
        rx="31.5"
        stroke="#E4E4E4"
      />

      {slug === 'enterprise-solution' && (
        <g transform="translate(-54, -94.5)">
          <path
            d="M249 230.531C249 234.778 247.324 238.746 244.363 241.707L225.981 260.091C221.958 264.171 216.818 266.741 211.287 267.635C211.007 262.885 209.778 258.415 207.655 254.28H208.27C211.287 253.945 214.136 252.548 216.315 250.424L234.753 232.04C235.144 231.593 235.367 231.09 235.367 230.531C235.367 229.973 235.144 229.47 234.753 229.023L216.371 210.639C211.175 205.498 202.794 205.498 197.542 210.639L182.68 225.502L173.126 216.003L187.821 200.972C189.161 199.686 190.558 198.569 192.011 197.563C196.425 194.601 201.565 193.037 206.929 193.037C208.493 193.037 210.002 193.148 211.51 193.428C216.986 194.378 222.014 196.948 225.981 200.916L244.363 219.3C247.324 222.261 249 226.285 249 230.476V230.531Z"
            fill="url(#paint0_linear_1622_1378)"
          />
          <path
            d="M162.902 245.339L148.096 260.091C146.755 261.432 145.414 262.55 143.905 263.5C139.547 266.461 134.351 267.97 128.988 267.97C127.423 267.97 125.915 267.858 124.406 267.635C118.987 266.685 113.902 264.115 109.935 260.091L91.6094 241.707C85.4635 235.56 85.4635 225.502 91.6094 219.3L109.991 200.915C114.07 196.892 119.154 194.322 124.685 193.428C124.965 198.122 126.138 202.648 128.317 206.783H127.758C124.685 207.118 121.892 208.459 119.657 210.638L101.275 229.023C100.493 229.861 100.493 231.258 101.275 232.04L119.601 250.424C122.115 252.939 125.468 254.336 129.043 254.336C132.619 254.336 135.916 252.883 138.43 250.424L153.236 235.616L162.902 245.339Z"
            fill="url(#paint1_linear_1622_1378)"
          />
          <path
            d="M197.486 250.368L181.786 234.722L169.997 222.932L163.628 216.618L147.984 200.971C142.788 195.775 142.788 187.337 147.984 182.14L166.366 163.812C167.204 162.974 168.545 162.974 169.383 163.812L187.765 182.14C189.943 184.32 191.284 187.225 191.564 190.243V190.857C195.698 188.678 200.28 187.449 204.973 187.169C204.079 181.637 201.453 176.497 197.43 172.473L179.049 154.089C172.847 147.942 162.846 147.998 156.644 154.089L138.262 172.417C134.295 176.441 131.669 181.47 130.775 186.946C130.496 188.455 130.384 189.963 130.384 191.528C130.384 196.892 131.949 202.089 134.854 206.504C135.86 208.012 136.977 209.353 138.262 210.694L153.962 226.341L172.065 244.445L187.765 260.091C192.961 265.288 192.961 273.782 187.765 278.923L169.383 297.251C168.545 298.089 167.204 298.089 166.366 297.251L147.984 278.867C145.805 276.687 144.464 273.782 144.185 270.764V270.15C139.994 272.329 135.524 273.558 130.775 273.838C131.669 279.426 134.295 284.51 138.318 288.534L156.7 306.918C159.773 309.991 163.851 311.5 167.874 311.5C171.897 311.5 175.976 309.991 179.049 306.862L197.43 288.534C201.397 284.566 204.023 279.537 204.917 274.061C205.196 272.552 205.308 271.044 205.308 269.423C205.308 264.059 203.744 258.862 200.838 254.448C199.833 252.939 198.715 251.598 197.43 250.257L197.486 250.368Z"
            fill="url(#paint2_linear_1622_1378)"
          />
          <g filter="url(#filter1_d_1622_1378)">
            <use
              xlinkHref="#stroke0_1622_1378"
              fill="url(#paint3_linear_1622_1378)"
            />
            <use
              xlinkHref="#stroke0_1622_1378"
              fill="url(#paint4_linear_1622_1378)"
            />
            <use
              xlinkHref="#stroke1_1622_1378"
              fill="url(#paint5_linear_1622_1378)"
            />
            <use
              xlinkHref="#stroke1_1622_1378"
              fill="url(#paint6_linear_1622_1378)"
            />
            <use
              xlinkHref="#stroke2_1622_1378"
              fill="url(#paint7_linear_1622_1378)"
            />
            <use
              xlinkHref="#stroke2_1622_1378"
              fill="url(#paint8_linear_1622_1378)"
            />
          </g>
        </g>
      )}

      {slug === 'data-ai-integration' && (
        <g transform="translate(-54, -433.5)">
          <path
            d="M249 569.531C249 573.778 247.324 577.746 244.363 580.707L225.981 599.091C221.958 603.171 216.818 605.741 211.287 606.635C211.007 601.885 209.778 597.415 207.655 593.28H208.27C211.287 592.945 214.136 591.548 216.315 589.424L234.753 571.04C235.144 570.593 235.367 570.09 235.367 569.531C235.367 568.973 235.144 568.47 234.753 568.023L216.371 549.639C211.175 544.498 202.794 544.498 197.542 549.639L182.68 564.502L173.126 555.003L187.821 539.972C189.161 538.686 190.558 537.569 192.011 536.563C196.425 533.601 201.565 532.037 206.929 532.037C208.493 532.037 210.002 532.148 211.51 532.428C216.986 533.378 222.014 535.948 225.981 539.916L244.363 558.3C247.324 561.261 249 565.285 249 569.476V569.531Z"
            fill="url(#paint9_linear_1622_1378)"
          />
          <path
            d="M162.902 584.339L148.096 599.091C146.755 600.432 145.414 601.55 143.905 602.5C139.547 605.461 134.351 606.97 128.988 606.97C127.423 606.97 125.915 606.858 124.406 606.635C118.987 605.685 113.902 603.115 109.935 599.091L91.6094 580.707C85.4635 574.56 85.4635 564.502 91.6094 558.3L109.991 539.915C114.07 535.892 119.154 533.322 124.685 532.428C124.965 537.122 126.138 541.648 128.317 545.783H127.758C124.685 546.118 121.892 547.459 119.657 549.638L101.275 568.023C100.493 568.861 100.493 570.258 101.275 571.04L119.601 589.424C122.115 591.939 125.468 593.336 129.043 593.336C132.619 593.336 135.916 591.883 138.43 589.424L153.236 574.616L162.902 584.339Z"
            fill="url(#paint10_linear_1622_1378)"
          />
          <path
            d="M197.486 589.368L181.786 573.722L169.997 561.932L163.628 555.618L147.984 539.971C142.788 534.775 142.788 526.337 147.984 521.14L166.366 502.812C167.204 501.974 168.545 501.974 169.383 502.812L187.765 521.14C189.943 523.32 191.284 526.225 191.564 529.243V529.857C195.698 527.678 200.28 526.449 204.973 526.169C204.079 520.637 201.453 515.497 197.43 511.473L179.049 493.089C172.847 486.942 162.846 486.998 156.644 493.089L138.262 511.417C134.295 515.441 131.669 520.47 130.775 525.946C130.496 527.455 130.384 528.963 130.384 530.528C130.384 535.892 131.949 541.089 134.854 545.504C135.86 547.012 136.977 548.353 138.262 549.694L153.962 565.341L172.065 583.445L187.765 599.091C192.961 604.288 192.961 612.782 187.765 617.923L169.383 636.251C168.545 637.089 167.204 637.089 166.366 636.251L147.984 617.867C145.805 615.687 144.464 612.782 144.185 609.764V609.15C139.994 611.329 135.524 612.558 130.775 612.838C131.669 618.426 134.295 623.51 138.318 627.534L156.7 645.918C159.773 648.991 163.851 650.5 167.874 650.5C171.897 650.5 175.976 648.991 179.049 645.862L197.43 627.534C201.397 623.566 204.023 618.537 204.917 613.061C205.196 611.552 205.308 610.044 205.308 608.423C205.308 603.059 203.744 597.862 200.838 593.448C199.833 591.939 198.715 590.598 197.43 589.257L197.486 589.368Z"
            fill="url(#paint11_linear_1622_1378)"
          />
          <g filter="url(#filter3_d_1622_1378)">
            <path
              d="M213 602.478C213 603.81 212.467 605.087 211.519 606.029C210.571 606.971 209.285 607.5 207.944 607.5H127.056C125.715 607.5 124.429 606.971 123.481 606.029C122.533 605.087 122 603.81 122 602.478V535.522C122 534.19 122.533 532.913 123.481 531.971C124.429 531.029 125.715 530.5 127.056 530.5C128.396 530.5 129.682 531.029 130.63 531.971C131.578 532.913 132.111 534.19 132.111 535.522V576.951L150.442 558.739C150.911 558.271 151.469 557.899 152.084 557.646C152.699 557.392 153.357 557.262 154.023 557.262C154.688 557.262 155.347 557.392 155.961 557.646C156.576 557.899 157.134 558.271 157.604 558.739L167.5 568.582L185.616 550.587H180.981C179.641 550.587 178.355 550.058 177.407 549.116C176.459 548.174 175.926 546.897 175.926 545.565C175.926 544.233 176.459 542.956 177.407 542.014C178.355 541.073 179.641 540.543 180.981 540.543H197.833C199.174 540.543 200.46 541.073 201.408 542.014C202.356 542.956 202.889 544.233 202.889 545.565V562.304C202.889 563.636 202.356 564.913 201.408 565.855C200.46 566.797 199.174 567.326 197.833 567.326C196.493 567.326 195.207 566.797 194.259 565.855C193.31 564.913 192.778 563.636 192.778 562.304V557.701L171.077 579.261C170.607 579.729 170.049 580.101 169.435 580.354C168.82 580.608 168.161 580.738 167.496 580.738C166.83 580.738 166.172 580.608 165.557 580.354C164.943 580.101 164.384 579.729 163.915 579.261L154.019 569.418L132.111 591.179V597.457H207.944C209.285 597.457 210.571 597.986 211.519 598.927C212.467 599.869 213 601.146 213 602.478Z"
              fill="url(#paint12_linear_1622_1378)"
            />
          </g>
        </g>
      )}

      {slug === 'smart-iot-system' && (
        <g transform="translate(-54, -772.5)">
          <path
            d="M249 908.531C249 912.778 247.324 916.746 244.363 919.707L225.981 938.091C221.958 942.171 216.818 944.741 211.287 945.635C211.007 940.885 209.778 936.415 207.655 932.28H208.27C211.287 931.945 214.136 930.548 216.315 928.424L234.753 910.04C235.144 909.593 235.367 909.09 235.367 908.531C235.367 907.973 235.144 907.47 234.753 907.023L216.371 888.639C211.175 883.498 202.794 883.498 197.542 888.639L182.68 903.502L173.126 894.003L187.821 878.972C189.161 877.686 190.558 876.569 192.011 875.563C196.425 872.601 201.565 871.037 206.929 871.037C208.493 871.037 210.002 871.148 211.51 871.428C216.986 872.378 222.014 874.948 225.981 878.916L244.363 897.3C247.324 900.261 249 904.285 249 908.476V908.531Z"
            fill="url(#paint13_linear_1622_1378)"
          />
          <path
            d="M162.902 923.339L148.096 938.091C146.755 939.432 145.414 940.55 143.905 941.5C139.547 944.461 134.351 945.97 128.988 945.97C127.423 945.97 125.915 945.858 124.406 945.635C118.987 944.685 113.902 942.115 109.935 938.091L91.6094 919.707C85.4635 913.56 85.4635 903.502 91.6094 897.3L109.991 878.915C114.07 874.892 119.154 872.322 124.685 871.428C124.965 876.122 126.138 880.648 128.317 884.783H127.758C124.685 885.118 121.892 886.459 119.657 888.638L101.275 907.023C100.493 907.861 100.493 909.258 101.275 910.04L119.601 928.424C122.115 930.939 125.468 932.336 129.043 932.336C132.619 932.336 135.916 930.883 138.43 928.424L153.236 913.616L162.902 923.339Z"
            fill="url(#paint14_linear_1622_1378)"
          />
          <path
            d="M197.486 928.368L181.786 912.722L169.997 900.932L163.628 894.618L147.984 878.971C142.788 873.775 142.788 865.337 147.984 860.14L166.366 841.812C167.204 840.974 168.545 840.974 169.383 841.812L187.765 860.14C189.943 862.32 191.284 865.225 191.564 868.243V868.857C195.698 866.678 200.28 865.449 204.973 865.169C204.079 859.637 201.453 854.497 197.43 850.473L179.049 832.089C172.847 825.942 162.846 825.998 156.644 832.089L138.262 850.417C134.295 854.441 131.669 859.47 130.775 864.946C130.496 866.455 130.384 867.963 130.384 869.528C130.384 874.892 131.949 880.089 134.854 884.504C135.86 886.012 136.977 887.353 138.262 888.694L153.962 904.341L172.065 922.445L187.765 938.091C192.961 943.288 192.961 951.782 187.765 956.923L169.383 975.251C168.545 976.089 167.204 976.089 166.366 975.251L147.984 956.867C145.805 954.687 144.464 951.782 144.185 948.764V948.15C139.994 950.329 135.524 951.558 130.775 951.838C131.669 957.426 134.295 962.51 138.318 966.534L156.7 984.918C159.773 987.991 163.851 989.5 167.874 989.5C171.897 989.5 175.976 987.991 179.049 984.862L197.43 966.534C201.397 962.566 204.023 957.537 204.917 952.061C205.196 950.552 205.308 949.044 205.308 947.423C205.308 942.059 203.744 936.862 200.838 932.448C199.833 930.939 198.715 929.598 197.43 928.257L197.486 928.368Z"
            fill="url(#paint15_linear_1622_1378)"
          />
          <g filter="url(#filter5_d_1622_1378)">
            <path
              d="M213 896.601V942.2C213 943.208 212.605 944.174 211.902 944.887C211.198 945.6 210.245 946 209.25 946H126.75C125.755 946 124.802 945.6 124.098 944.887C123.395 944.174 123 943.208 123 942.2V896.601C122.997 895.601 123.189 894.612 123.567 893.689C123.944 892.765 124.499 891.928 125.198 891.224L162.698 853.224C164.105 851.8 166.012 851 168 851C169.988 851 171.895 851.8 173.302 853.224L210.802 891.224C211.501 891.928 212.056 892.765 212.434 893.689C212.811 894.612 213.003 895.601 213 896.601Z"
              fill="url(#paint16_linear_1622_1378)"
            />
          </g>
        </g>
      )}

      {slug === 'digital-development' && (
        <g transform="translate(-54, -1111.5)">
          <path
            d="M249 1247.53C249 1251.78 247.324 1255.75 244.363 1258.71L225.981 1277.09C221.958 1281.17 216.818 1283.74 211.287 1284.64C211.007 1279.89 209.778 1275.42 207.655 1271.28H208.27C211.287 1270.94 214.136 1269.55 216.315 1267.42L234.753 1249.04C235.144 1248.59 235.367 1248.09 235.367 1247.53C235.367 1246.97 235.144 1246.47 234.753 1246.02L216.371 1227.64C211.175 1222.5 202.794 1222.5 197.542 1227.64L182.68 1242.5L173.126 1233L187.821 1217.97C189.161 1216.69 190.558 1215.57 192.011 1214.56C196.425 1211.6 201.565 1210.04 206.929 1210.04C208.493 1210.04 210.002 1210.15 211.51 1210.43C216.986 1211.38 222.014 1213.95 225.981 1217.92L244.363 1236.3C247.324 1239.26 249 1243.28 249 1247.48V1247.53Z"
            fill="url(#paint17_linear_1622_1378)"
          />
          <path
            d="M162.902 1262.34L148.096 1277.09C146.755 1278.43 145.414 1279.55 143.905 1280.5C139.547 1283.46 134.351 1284.97 128.988 1284.97C127.423 1284.97 125.915 1284.86 124.406 1284.63C118.987 1283.68 113.902 1281.11 109.935 1277.09L91.6094 1258.71C85.4635 1252.56 85.4635 1242.5 91.6094 1236.3L109.991 1217.92C114.07 1213.89 119.154 1211.32 124.685 1210.43C124.965 1215.12 126.138 1219.65 128.317 1223.78H127.758C124.685 1224.12 121.892 1225.46 119.657 1227.64L101.275 1246.02C100.493 1246.86 100.493 1248.26 101.275 1249.04L119.601 1267.42C122.115 1269.94 125.468 1271.34 129.043 1271.34C132.619 1271.34 135.916 1269.88 138.43 1267.42L153.236 1252.62L162.902 1262.34Z"
            fill="url(#paint18_linear_1622_1378)"
          />
          <path
            d="M197.486 1267.37L181.786 1251.72L169.997 1239.93L163.628 1233.62L147.984 1217.97C142.788 1212.77 142.788 1204.34 147.984 1199.14L166.366 1180.81C167.204 1179.97 168.545 1179.97 169.383 1180.81L187.765 1199.14C189.943 1201.32 191.284 1204.23 191.564 1207.24V1207.86C195.698 1205.68 200.28 1204.45 204.973 1204.17C204.079 1198.64 201.453 1193.5 197.43 1189.47L179.049 1171.09C172.847 1164.94 162.846 1165 156.644 1171.09L138.262 1189.42C134.295 1193.44 131.669 1198.47 130.775 1203.95C130.496 1205.45 130.384 1206.96 130.384 1208.53C130.384 1213.89 131.949 1219.09 134.854 1223.5C135.86 1225.01 136.977 1226.35 138.262 1227.69L153.962 1243.34L172.065 1261.45L187.765 1277.09C192.961 1282.29 192.961 1290.78 187.765 1295.92L169.383 1314.25C168.545 1315.09 167.204 1315.09 166.366 1314.25L147.984 1295.87C145.805 1293.69 144.464 1290.78 144.185 1287.76V1287.15C139.994 1289.33 135.524 1290.56 130.775 1290.84C131.669 1296.43 134.295 1301.51 138.318 1305.53L156.7 1323.92C159.773 1326.99 163.851 1328.5 167.874 1328.5C171.897 1328.5 175.976 1326.99 179.049 1323.86L197.43 1305.53C201.397 1301.57 204.023 1296.54 204.917 1291.06C205.196 1289.55 205.308 1288.04 205.308 1286.42C205.308 1281.06 203.744 1275.86 200.838 1271.45C199.833 1269.94 198.715 1268.6 197.43 1267.26L197.486 1267.37Z"
            fill="url(#paint19_linear_1622_1378)"
          />
          <g filter="url(#filter7_d_1622_1378)">
            <rect
              x="98"
              y="1216"
              width="103.256"
              height="65.1126"
              rx="12"
              fill="url(#paint20_linear_1622_1378)"
            />
            <rect
              x="98"
              y="1216"
              width="103.256"
              height="65.1126"
              rx="12"
              fill="url(#paint21_linear_1622_1378)"
            />
          </g>
          <g filter="url(#filter8_d_1622_1378)">
            <rect
              x="208.562"
              y="1216.19"
              width="30.4373"
              height="65.1126"
              rx="12"
              fill="url(#paint22_linear_1622_1378)"
            />
            <rect
              x="208.562"
              y="1216.19"
              width="30.4373"
              height="65.1126"
              rx="12"
              fill="url(#paint23_linear_1622_1378)"
            />
          </g>
        </g>
      )}

      {/* Title - Exact Figma coordinates (257, 105), Inter Bold 32px, #155A99 */}
      <text
        x="257"
        y="105"
        fill="#155A99"
        fontFamily="var(--font-body), Inter, sans-serif"
        fontSize="32"
        fontWeight="700"
      >
        {resolvedTitle}
      </text>

      {/* Description - Exact Figma coordinates (257, 145 / 169 / 193), Inter Regular 20px, #155A99 */}
      <text
        fill="#155A99"
        fontFamily="var(--font-body), Inter, sans-serif"
        fontSize="20"
        fontWeight="400"
      >
        <tspan x="257" y="145">
          {cardData.lines[0]}
        </tspan>
        <tspan x="257" y="169">
          {cardData.lines[1]}
        </tspan>
        <tspan x="257" y="193">
          {cardData.lines[2]}
        </tspan>
      </text>

      <defs>
        <filter
          id="filter1_d_1622_1378"
          x="90.427"
          y="167.385"
          width="154.084"
          height="154.129"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="14" />
          <feGaussianBlur stdDeviation="20.35" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1622_1378"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1622_1378"
            result="shape"
          />
        </filter>
        <filter
          id="filter3_d_1622_1378"
          x="81.3"
          y="503.8"
          width="172.4"
          height="158.4"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="14" />
          <feGaussianBlur stdDeviation="20.35" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1622_1378"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1622_1378"
            result="shape"
          />
        </filter>
        <filter
          id="filter5_d_1622_1378"
          x="82.3"
          y="824.3"
          width="171.4"
          height="176.4"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="14" />
          <feGaussianBlur stdDeviation="20.35" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1622_1378"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1622_1378"
            result="shape"
          />
        </filter>
        <filter
          id="filter7_d_1622_1378"
          x="68.8"
          y="1193.8"
          width="175.656"
          height="137.512"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="7" dy="14" />
          <feGaussianBlur stdDeviation="18.1" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1622_1378"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1622_1378"
            result="shape"
          />
        </filter>
        <filter
          id="filter8_d_1622_1378"
          x="179.362"
          y="1193.99"
          width="102.838"
          height="137.512"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="7" dy="14" />
          <feGaussianBlur stdDeviation="18.1" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1622_1378"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1622_1378"
            result="shape"
          />
        </filter>

        <linearGradient
          id="paint0_linear_1622_1378"
          x1="168"
          y1="149.5"
          x2="168"
          y2="311.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EEFF00" />
          <stop offset="0.961538" stopColor="#FBFFE0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_1622_1378"
          x1="168"
          y1="149.5"
          x2="168"
          y2="311.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EEFF00" />
          <stop offset="0.961538" stopColor="#FBFFE0" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_1622_1378"
          x1="168"
          y1="149.5"
          x2="168"
          y2="311.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EEFF00" />
          <stop offset="0.961538" stopColor="#FBFFE0" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_1622_1378"
          x1="201.088"
          y1="196.913"
          x2="133.912"
          y2="264.088"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EEFF00" />
          <stop offset="0.961538" stopColor="#FBFFE0" />
        </linearGradient>
        <linearGradient
          id="paint4_linear_1622_1378"
          x1="201.088"
          y1="196.913"
          x2="133.912"
          y2="264.088"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#2396FF" />
          <stop offset="1" stopColor="#2396FF" />
        </linearGradient>
        <linearGradient
          id="paint5_linear_1622_1378"
          x1="201.088"
          y1="196.913"
          x2="133.912"
          y2="264.088"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EEFF00" />
          <stop offset="0.961538" stopColor="#FBFFE0" />
        </linearGradient>
        <linearGradient
          id="paint6_linear_1622_1378"
          x1="201.088"
          y1="196.913"
          x2="133.912"
          y2="264.088"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#2396FF" />
          <stop offset="1" stopColor="#2396FF" />
        </linearGradient>
        <linearGradient
          id="paint7_linear_1622_1378"
          x1="201.088"
          y1="196.913"
          x2="133.912"
          y2="264.088"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EEFF00" />
          <stop offset="0.961538" stopColor="#FBFFE0" />
        </linearGradient>
        <linearGradient
          id="paint8_linear_1622_1378"
          x1="201.088"
          y1="196.913"
          x2="133.912"
          y2="264.088"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#2396FF" />
          <stop offset="1" stopColor="#2396FF" />
        </linearGradient>

        <linearGradient
          id="paint9_linear_1622_1378"
          x1="168"
          y1="488.5"
          x2="168"
          y2="650.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EEFF00" />
          <stop offset="0.961538" stopColor="#FBFFE0" />
        </linearGradient>
        <linearGradient
          id="paint10_linear_1622_1378"
          x1="168"
          y1="488.5"
          x2="168"
          y2="650.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EEFF00" />
          <stop offset="0.961538" stopColor="#FBFFE0" />
        </linearGradient>
        <linearGradient
          id="paint11_linear_1622_1378"
          x1="168"
          y1="488.5"
          x2="168"
          y2="650.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EEFF00" />
          <stop offset="0.961538" stopColor="#FBFFE0" />
        </linearGradient>
        <linearGradient
          id="paint12_linear_1622_1378"
          x1="167.5"
          y1="530.5"
          x2="167.5"
          y2="607.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#2396FF" />
          <stop offset="1" stopColor="#2396FF" />
        </linearGradient>

        <linearGradient
          id="paint13_linear_1622_1378"
          x1="168"
          y1="827.5"
          x2="168"
          y2="989.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EEFF00" />
          <stop offset="0.961538" stopColor="#FBFFE0" />
        </linearGradient>
        <linearGradient
          id="paint14_linear_1622_1378"
          x1="168"
          y1="827.5"
          x2="168"
          y2="989.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EEFF00" />
          <stop offset="0.961538" stopColor="#FBFFE0" />
        </linearGradient>
        <linearGradient
          id="paint15_linear_1622_1378"
          x1="168"
          y1="827.5"
          x2="168"
          y2="989.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EEFF00" />
          <stop offset="0.961538" stopColor="#FBFFE0" />
        </linearGradient>
        <linearGradient
          id="paint16_linear_1622_1378"
          x1="168"
          y1="851"
          x2="168"
          y2="946"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#2396FF" />
          <stop offset="1" stopColor="#2396FF" />
        </linearGradient>

        <linearGradient
          id="paint17_linear_1622_1378"
          x1="168"
          y1="1166.5"
          x2="168"
          y2="1328.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EEFF00" />
          <stop offset="0.961538" stopColor="#FBFFE0" />
        </linearGradient>
        <linearGradient
          id="paint18_linear_1622_1378"
          x1="168"
          y1="1166.5"
          x2="168"
          y2="1328.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EEFF00" />
          <stop offset="0.961538" stopColor="#FBFFE0" />
        </linearGradient>
        <linearGradient
          id="paint19_linear_1622_1378"
          x1="168"
          y1="1166.5"
          x2="168"
          y2="1328.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EEFF00" />
          <stop offset="0.961538" stopColor="#FBFFE0" />
        </linearGradient>
        <linearGradient
          id="paint20_linear_1622_1378"
          x1="149.628"
          y1="1216"
          x2="149.628"
          y2="1281.11"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#299EED" />
          <stop offset="1" stopColor="#B2E0FF" stopOpacity="0.56" />
        </linearGradient>
        <linearGradient
          id="paint21_linear_1622_1378"
          x1="149.628"
          y1="1216"
          x2="149.628"
          y2="1281.11"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#2396FF" />
          <stop offset="1" stopColor="#2396FF" />
        </linearGradient>
        <linearGradient
          id="paint22_linear_1622_1378"
          x1="223.781"
          y1="1216.19"
          x2="223.781"
          y2="1281.3"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#299EED" />
          <stop offset="1" stopColor="#B2E0FF" stopOpacity="0.56" />
        </linearGradient>
        <linearGradient
          id="paint23_linear_1622_1378"
          x1="223.781"
          y1="1216.19"
          x2="223.781"
          y2="1281.3"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#2396FF" />
          <stop offset="1" stopColor="#2396FF" />
        </linearGradient>

        <path
          id="stroke0_1622_1378"
          d="M201.075 264.101C199.314 265.862 196.973 266.812 194.517 266.812L179.272 266.813C175.912 266.837 172.715 265.771 170.051 263.848C171.904 261.763 173.248 259.399 174.083 256.804L174.338 257.059C175.728 258.171 177.488 258.774 179.273 258.797L194.541 258.819C194.889 258.796 195.19 258.68 195.422 258.448C195.653 258.216 195.769 257.915 195.792 257.568L195.793 242.322C195.77 238.036 192.295 234.561 187.986 234.515L175.66 234.515L175.637 226.615L187.963 226.475C189.052 226.498 190.095 226.614 191.114 226.799C194.172 227.401 196.953 228.884 199.177 231.108C199.825 231.757 200.405 232.429 200.914 233.17C202.791 235.834 203.81 238.985 203.81 242.275L203.809 257.521C203.809 259.977 202.835 262.34 201.098 264.078L201.075 264.101Z"
        />
        <path
          id="stroke1_1622_1378"
          d="M159.233 234.54L146.976 234.517C145.864 234.517 144.845 234.425 143.825 234.193C140.79 233.614 138.01 232.085 135.786 229.861C135.137 229.212 134.558 228.54 134.025 227.822C132.172 225.181 131.129 222.007 131.152 218.694L131.177 203.471C131.177 198.374 135.348 194.203 140.468 194.18L155.714 194.179C159.073 194.202 162.247 195.244 164.912 197.167C163.081 199.229 161.691 201.593 160.88 204.211L160.648 203.979C159.235 202.844 157.52 202.242 155.69 202.219L140.444 202.22C139.773 202.243 139.193 202.822 139.193 203.471L139.169 218.693C139.169 220.778 139.98 222.748 141.462 224.23C142.945 225.713 144.915 226.478 146.977 226.501L159.256 226.5L159.233 234.54Z"
        />
        <path
          id="stroke2_1622_1378"
          d="M171.488 250.966L171.466 237.968L171.466 228.19L171.444 222.931L171.444 209.956C171.445 205.647 174.943 202.148 179.253 202.148L194.475 202.17C195.17 202.17 195.726 202.726 195.726 203.421L195.748 218.643C195.748 220.45 195.1 222.211 193.964 223.578L193.709 223.833C196.327 224.644 198.737 226.034 200.799 227.864C202.722 225.199 203.765 221.979 203.765 218.643L203.766 203.397C203.743 198.277 199.573 194.153 194.476 194.107L179.254 194.085C175.94 194.108 172.766 195.104 170.125 197.005C169.383 197.514 168.711 198.094 168.062 198.742C165.838 200.967 164.332 203.77 163.706 206.806C163.497 207.848 163.405 208.868 163.381 209.957L163.404 222.955L163.403 237.968L163.425 250.966C163.425 255.276 159.903 258.798 155.617 258.775L140.394 258.753C139.699 258.753 139.143 258.197 139.143 257.502L139.144 242.256C139.144 240.449 139.793 238.688 140.929 237.321L141.184 237.066C138.542 236.232 136.179 234.889 134.094 233.035C132.148 235.723 131.128 238.92 131.128 242.257L131.127 257.502C131.127 260.051 132.192 262.368 133.86 264.036C135.528 265.704 137.845 266.769 140.417 266.746L155.639 266.768C158.929 266.768 162.104 265.772 164.745 263.872C165.486 263.362 166.158 262.783 166.83 262.111C169.055 259.886 170.561 257.083 171.187 254.047C171.395 253.005 171.488 251.985 171.511 250.896L171.488 250.966Z"
        />
      </defs>
    </svg>
  )
}

