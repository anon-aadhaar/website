interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const Icons: Record<string, any> = {
  Logo: ({ size = 34, color, ...props }: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 34 34"
      fill="none"
      {...props}
    >
      <path
        d="M0.00591726 10.5519V15.7281C0.00591726 15.8169 0.0769276 15.888 0.16569 15.888H4.5624C4.65116 15.888 4.72217 15.8169 4.72217 15.7281V6.16693C4.72217 5.33809 5.39282 4.66713 6.22127 4.66713H15.6991C15.7879 4.66713 15.8589 4.59609 15.8589 4.50728V0.159846C15.8589 0.0710425 15.7859 0 15.6972 0L10.5332 0.00986693C9.80727 0.00986693 9.11098 0.29996 8.59616 0.815021L0.80478 8.61002C0.289957 9.12508 0 9.82367 0 10.5538L0.00591726 10.5519Z"
        fill={color ?? "#FD8B0E"}
      />
      <path
        d="M33.9842 10.5499C33.9842 9.82368 33.6943 9.12509 33.1794 8.61201L25.3881 0.81701C24.8732 0.301948 24.175 0.0118565 23.4451 0.0118565H18.2713C18.1825 0.0118565 18.1115 0.0828997 18.1115 0.171703V4.57045C18.1115 4.65925 18.1825 4.7303 18.2713 4.7303H27.828C28.6565 4.7303 29.3271 5.40126 29.3271 6.23009V15.7124C29.3271 15.8012 29.3981 15.8722 29.4869 15.8722H33.8323C33.9211 15.8722 33.9941 15.7992 33.9921 15.7104L33.9822 10.544L33.9842 10.5499Z"
        fill={color ?? "#081224"}
      />
      <path
        d="M33.8343 18.112H29.4376C29.3488 18.112 29.2778 18.1831 29.2778 18.2719V27.8331C29.2778 28.6619 28.6072 29.3329 27.7787 29.3329H18.3009C18.2121 29.3329 18.1411 29.4039 18.1411 29.4927V33.8402C18.1411 33.929 18.2141 34 18.3028 34L23.4668 33.9901C24.1927 33.9901 24.891 33.7 25.4038 33.185L33.1952 25.39C33.71 24.8749 34 24.1763 34 23.4462V18.2699C34 18.1811 33.927 18.1101 33.8402 18.1101L33.8343 18.112Z"
        fill={color ?? "#009A08"}
      />
      <path
        d="M15.7287 29.2677H6.17195C5.3435 29.2677 4.67285 28.5967 4.67285 27.7679V18.2856C4.67285 18.1968 4.60184 18.1258 4.51308 18.1258H0.167658C0.0788955 18.1258 0.0078852 18.1988 0.0078852 18.2876L0.0177483 23.454C0.0177483 24.1802 0.307706 24.8788 0.822528 25.3919L8.61391 33.1869C9.12873 33.7019 9.827 33.992 10.5568 33.992H15.7307C15.8195 33.992 15.8905 33.921 15.8905 33.8322V29.4334C15.8905 29.3446 15.8195 29.2736 15.7307 29.2736L15.7287 29.2677Z"
        fill={color ?? "#081224"}
      />
    </svg>
  ),
  LogoFull: ({ size = 34, ...props }: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="261"
      height="113"
      viewBox="0 0 261 113"
      fill="none"
      {...props}
    >
      <path
        d="M51.2211 1.03165V15.3451C51.2211 15.6375 50.9917 15.8714 50.705 15.8714H20.0832C17.4071 15.8714 15.2408 18.0805 15.2408 20.8093V52.2886C15.2408 52.581 15.0114 52.8149 14.7247 52.8149H0.516097C0.229377 52.8149 0 52.581 0 52.2886V35.2463C0 32.8488 0.936621 30.5423 2.5996 28.8465L27.7673 3.18875C29.4239 1.49945 31.6731 0.544355 34.0242 0.537857L50.6986 0.505371C50.9853 0.505371 51.2211 0.739273 51.2211 1.03165Z"
        fill="#FD8B0E"
      />
      <path
        d="M58.5229 1.03165V15.3451C58.5229 15.6375 58.7523 15.8714 59.039 15.8714H89.6544C92.3305 15.8714 94.4968 18.0805 94.4968 20.8093V52.2886C94.4968 52.581 94.7262 52.8149 95.0129 52.8149H109.215C109.502 52.8149 109.731 52.581 109.731 52.2886V35.2463C109.731 32.8488 108.795 30.5423 107.132 28.8465L81.9766 3.18875C80.32 1.49945 78.0709 0.544355 75.7198 0.537857L59.0454 0.505371C58.7586 0.505371 58.5229 0.739273 58.5229 1.03165Z"
        fill="#081224"
      />
      <path
        d="M51.2211 111.973V97.6591C51.2211 97.3667 50.9917 97.1328 50.705 97.1328H20.0832C17.4071 97.1328 15.2408 94.9237 15.2408 92.1949V60.7156C15.2408 60.4232 15.0114 60.1893 14.7247 60.1893H0.516097C0.229377 60.1893 0 60.4232 0 60.7156V77.758C0 80.1554 0.936621 82.462 2.5996 84.1578L27.7673 109.822C29.4303 111.518 31.6795 112.466 34.0242 112.473L50.705 112.505C50.9917 112.505 51.2274 112.271 51.2274 111.979L51.2211 111.973Z"
        fill="#081224"
      />
      <path
        d="M58.5229 111.973V97.6591C58.5229 97.3667 58.7523 97.1328 59.039 97.1328H89.6544C92.3305 97.1328 94.4968 94.9237 94.4968 92.1949V60.7156C94.4968 60.4232 94.7262 60.1893 95.0129 60.1893H109.215C109.502 60.1893 109.731 60.4232 109.731 60.7156V77.758C109.731 80.1554 108.795 82.462 107.132 84.1578L81.9639 109.822C80.3009 111.518 78.0518 112.466 75.707 112.473L59.0262 112.505C58.7395 112.505 58.5038 112.271 58.5038 111.979L58.5229 111.973Z"
        fill="#009A08"
      />
      <path
        d="M127.016 59.7556C126.75 59.7556 126.501 59.6543 126.269 59.4517C126.069 59.249 125.97 58.9957 125.97 58.6917C125.97 58.5567 126.003 58.4047 126.069 58.2358L138.074 25.5594C138.174 25.2217 138.357 24.9346 138.622 24.6982C138.921 24.428 139.32 24.2929 139.818 24.2929H145.248C145.746 24.2929 146.128 24.428 146.393 24.6982C146.659 24.9346 146.858 25.2217 146.991 25.5594L158.996 58.2358C159.029 58.4047 159.046 58.5567 159.046 58.6917C159.046 58.9957 158.946 59.249 158.747 59.4517C158.548 59.6543 158.315 59.7556 158.05 59.7556H153.716C153.251 59.7556 152.902 59.6543 152.67 59.4517C152.471 59.2152 152.338 58.9957 152.271 58.7931L149.93 52.6124H135.135L132.794 58.7931C132.728 58.9957 132.578 59.2152 132.346 59.4517C132.147 59.6543 131.815 59.7556 131.35 59.7556H127.016ZM136.879 46.7864H148.187L142.508 31.1321L136.879 46.7864Z"
        fill="#081224"
      />
      <path
        d="M164.892 59.7556C164.56 59.7556 164.278 59.6374 164.045 59.401C163.813 59.1646 163.697 58.8775 163.697 58.5398V25.5594C163.697 25.1879 163.813 24.8839 164.045 24.6475C164.278 24.4111 164.56 24.2929 164.892 24.2929H168.728C169.193 24.2929 169.525 24.4111 169.724 24.6475C169.957 24.8502 170.106 25.0021 170.172 25.1035L184.519 47.7996V25.5594C184.519 25.1879 184.618 24.8839 184.818 24.6475C185.05 24.4111 185.349 24.2929 185.714 24.2929H189.899C190.264 24.2929 190.563 24.4111 190.795 24.6475C191.028 24.8839 191.144 25.1879 191.144 25.5594V58.4891C191.144 58.8606 191.028 59.1646 190.795 59.401C190.563 59.6374 190.281 59.7556 189.948 59.7556H186.063C185.598 59.7556 185.266 59.6374 185.067 59.401C184.867 59.1646 184.718 59.0126 184.618 58.9451L170.322 36.7555V58.5398C170.322 58.8775 170.206 59.1646 169.973 59.401C169.741 59.6374 169.442 59.7556 169.077 59.7556H164.892Z"
        fill="#081224"
      />
      <path
        d="M212.316 60.2622C209.361 60.2622 206.82 59.7725 204.695 58.7931C202.57 57.7799 200.909 56.2431 199.714 54.1829C198.518 52.0889 197.87 49.4883 197.771 46.3811C197.738 44.9288 197.721 43.4934 197.721 42.0749C197.721 40.6564 197.738 39.2041 197.771 37.7181C197.87 34.6446 198.535 32.0778 199.763 30.0176C200.992 27.9574 202.669 26.4038 204.795 25.3568C206.953 24.3098 209.46 23.7863 212.316 23.7863C215.172 23.7863 217.68 24.3098 219.838 25.3568C221.997 26.4038 223.691 27.9574 224.919 30.0176C226.148 32.0778 226.812 34.6446 226.912 37.7181C226.978 39.2041 227.011 40.6564 227.011 42.0749C227.011 43.4934 226.978 44.9288 226.912 46.3811C226.812 49.4883 226.165 52.0889 224.969 54.1829C223.774 56.2431 222.097 57.7799 219.938 58.7931C217.813 59.7725 215.272 60.2622 212.316 60.2622ZM212.316 54.4362C214.475 54.4362 216.235 53.7945 217.597 52.5111C218.958 51.1939 219.689 49.0661 219.788 46.1278C219.855 44.6417 219.888 43.2739 219.888 42.0243C219.888 40.7408 219.855 39.373 219.788 37.9207C219.722 35.9618 219.357 34.3744 218.693 33.1586C218.062 31.9089 217.198 31.0139 216.102 30.4735C215.006 29.8994 213.744 29.6123 212.316 29.6123C210.922 29.6123 209.676 29.8994 208.58 30.4735C207.485 31.0139 206.604 31.9089 205.94 33.1586C205.309 34.3744 204.961 35.9618 204.894 37.9207C204.861 39.373 204.844 40.7408 204.844 42.0243C204.844 43.2739 204.861 44.6417 204.894 46.1278C204.994 49.0661 205.724 51.1939 207.086 52.5111C208.448 53.7945 210.191 54.4362 212.316 54.4362Z"
        fill="#081224"
      />
      <path
        d="M234.748 59.7556C234.416 59.7556 234.134 59.6374 233.901 59.401C233.669 59.1646 233.553 58.8775 233.553 58.5398V25.5594C233.553 25.1879 233.669 24.8839 233.901 24.6475C234.134 24.4111 234.416 24.2929 234.748 24.2929H238.584C239.049 24.2929 239.381 24.4111 239.58 24.6475C239.813 24.8502 239.962 25.0021 240.028 25.1035L254.375 47.7996V25.5594C254.375 25.1879 254.474 24.8839 254.674 24.6475C254.906 24.4111 255.205 24.2929 255.57 24.2929H259.755C260.12 24.2929 260.419 24.4111 260.651 24.6475C260.884 24.8839 261 25.1879 261 25.5594V58.4891C261 58.8606 260.884 59.1646 260.651 59.401C260.419 59.6374 260.137 59.7556 259.805 59.7556H255.919C255.454 59.7556 255.122 59.6374 254.923 59.401C254.723 59.1646 254.574 59.0126 254.474 58.9451L240.178 36.7555V58.5398C240.178 58.8775 240.062 59.1646 239.829 59.401C239.597 59.6374 239.298 59.7556 238.933 59.7556H234.748Z"
        fill="#081224"
      />
      <path
        d="M126.428 88.9566C126.273 88.9566 126.139 88.8978 126.023 88.7804C125.908 88.6629 125.85 88.5258 125.85 88.3692C125.85 88.2713 125.86 88.1636 125.879 88.0461L133.041 69.043C133.118 68.8472 133.224 68.6905 133.359 68.5731C133.493 68.4556 133.696 68.3968 133.965 68.3968H135.929C136.199 68.3968 136.401 68.4556 136.535 68.5731C136.67 68.6905 136.776 68.8472 136.853 69.043L143.986 88.0461C144.025 88.1636 144.044 88.2713 144.044 88.3692C144.044 88.5258 143.986 88.6629 143.871 88.7804C143.755 88.8978 143.621 88.9566 143.467 88.9566H141.994C141.763 88.9566 141.589 88.8978 141.474 88.7804C141.378 88.6629 141.31 88.5552 141.272 88.4573L139.683 84.2866H130.211L128.622 88.4573C128.603 88.5552 128.536 88.6629 128.42 88.7804C128.305 88.8978 128.131 88.9566 127.9 88.9566H126.428ZM131.048 81.7607H138.846L134.947 71.3339L131.048 81.7607Z"
        fill="#081224"
      />
      <path
        d="M145.775 88.9566C145.621 88.9566 145.486 88.8978 145.37 88.7804C145.255 88.6629 145.197 88.5258 145.197 88.3692C145.197 88.2713 145.207 88.1636 145.226 88.0461L152.388 69.043C152.465 68.8472 152.571 68.6905 152.706 68.5731C152.841 68.4556 153.043 68.3968 153.312 68.3968H155.276C155.546 68.3968 155.748 68.4556 155.883 68.5731C156.017 68.6905 156.123 68.8472 156.2 69.043L163.334 88.0461C163.372 88.1636 163.391 88.2713 163.391 88.3692C163.391 88.5258 163.334 88.6629 163.218 88.7804C163.103 88.8978 162.968 88.9566 162.814 88.9566H161.341C161.11 88.9566 160.937 88.8978 160.821 88.7804C160.725 88.6629 160.657 88.5552 160.619 88.4573L159.031 84.2866H149.558L147.97 88.4573C147.95 88.5552 147.883 88.6629 147.767 88.7804C147.652 88.8978 147.479 88.9566 147.248 88.9566H145.775ZM150.396 81.7607H158.193L154.294 71.3339L150.396 81.7607Z"
        fill="#081224"
      />
      <path
        d="M167.144 88.9566C166.932 88.9566 166.768 88.8978 166.653 88.7804C166.537 88.6433 166.479 88.4769 166.479 88.2811V69.1017C166.479 68.8863 166.537 68.7199 166.653 68.6024C166.768 68.4654 166.932 68.3968 167.144 68.3968H173.699C175.682 68.3968 177.28 68.7003 178.493 69.3073C179.706 69.9143 180.592 70.815 181.15 72.0095C181.709 73.1843 181.997 74.6333 182.017 76.3564C182.036 77.2375 182.046 78.011 182.046 78.6767C182.046 79.3425 182.036 80.1061 182.017 80.9677C181.978 82.7691 181.68 84.267 181.121 85.4614C180.582 86.6363 179.716 87.5174 178.522 88.1048C177.348 88.6727 175.788 88.9566 173.844 88.9566H167.144ZM169.31 86.4601H173.699C175.028 86.4601 176.087 86.274 176.876 85.902C177.665 85.53 178.233 84.9327 178.58 84.1104C178.946 83.288 179.138 82.2012 179.158 80.8502C179.196 80.2627 179.215 79.7536 179.215 79.3229C179.215 78.8725 179.215 78.432 179.215 78.0012C179.215 77.5508 179.196 77.0417 179.158 76.4739C179.119 74.5746 178.676 73.1745 177.829 72.2738C176.982 71.3535 175.557 70.8934 173.555 70.8934H169.31V86.4601Z"
        fill="#081224"
      />
      <path
        d="M187.055 88.9566C186.843 88.9566 186.679 88.8978 186.564 88.7804C186.448 88.6433 186.391 88.4769 186.391 88.2811V69.1017C186.391 68.8863 186.448 68.7199 186.564 68.6024C186.679 68.4654 186.843 68.3968 187.055 68.3968H188.528C188.74 68.3968 188.903 68.4654 189.019 68.6024C189.153 68.7199 189.221 68.8863 189.221 69.1017V77.2082H199.156V69.1017C199.156 68.8863 199.213 68.7199 199.329 68.6024C199.464 68.4654 199.627 68.3968 199.82 68.3968H201.293C201.504 68.3968 201.668 68.4654 201.784 68.6024C201.918 68.7199 201.986 68.8863 201.986 69.1017V88.2811C201.986 88.4769 201.918 88.6433 201.784 88.7804C201.668 88.8978 201.504 88.9566 201.293 88.9566H199.82C199.627 88.9566 199.464 88.8978 199.329 88.7804C199.213 88.6433 199.156 88.4769 199.156 88.2811V79.8515H189.221V88.2811C189.221 88.4769 189.153 88.6433 189.019 88.7804C188.903 88.8978 188.74 88.9566 188.528 88.9566H187.055Z"
        fill="#081224"
      />
      <path
        d="M205.65 88.9566C205.496 88.9566 205.361 88.8978 205.245 88.7804C205.13 88.6629 205.072 88.5258 205.072 88.3692C205.072 88.2713 205.082 88.1636 205.101 88.0461L212.263 69.043C212.34 68.8472 212.446 68.6905 212.581 68.5731C212.716 68.4556 212.918 68.3968 213.187 68.3968H215.151C215.421 68.3968 215.623 68.4556 215.758 68.5731C215.892 68.6905 215.998 68.8472 216.075 69.043L223.209 88.0461C223.247 88.1636 223.266 88.2713 223.266 88.3692C223.266 88.5258 223.209 88.6629 223.093 88.7804C222.978 88.8978 222.843 88.9566 222.689 88.9566H221.216C220.985 88.9566 220.812 88.8978 220.696 88.7804C220.6 88.6629 220.532 88.5552 220.494 88.4573L218.906 84.2866H209.433L207.845 88.4573C207.825 88.5552 207.758 88.6629 207.642 88.7804C207.527 88.8978 207.354 88.9566 207.123 88.9566H205.65ZM210.27 81.7607H218.068L214.169 71.3339L210.27 81.7607Z"
        fill="#081224"
      />
      <path
        d="M224.997 88.9566C224.843 88.9566 224.708 88.8978 224.593 88.7804C224.477 88.6629 224.419 88.5258 224.419 88.3692C224.419 88.2713 224.429 88.1636 224.448 88.0461L231.61 69.043C231.687 68.8472 231.793 68.6905 231.928 68.5731C232.063 68.4556 232.265 68.3968 232.535 68.3968H234.498C234.768 68.3968 234.97 68.4556 235.105 68.5731C235.24 68.6905 235.346 68.8472 235.423 69.043L242.556 88.0461C242.594 88.1636 242.614 88.2713 242.614 88.3692C242.614 88.5258 242.556 88.6629 242.44 88.7804C242.325 88.8978 242.19 88.9566 242.036 88.9566H240.563C240.332 88.9566 240.159 88.8978 240.043 88.7804C239.947 88.6629 239.88 88.5552 239.841 88.4573L238.253 84.2866H228.78L227.192 88.4573C227.173 88.5552 227.105 88.6629 226.99 88.7804C226.874 88.8978 226.701 88.9566 226.47 88.9566H224.997ZM229.618 81.7607H237.415L233.516 71.3339L229.618 81.7607Z"
        fill="#081224"
      />
      <path
        d="M246.366 88.9566C246.154 88.9566 245.99 88.8978 245.875 88.7804C245.759 88.6433 245.702 88.4769 245.702 88.2811V69.1017C245.702 68.8863 245.759 68.7199 245.875 68.6024C245.99 68.4654 246.154 68.3968 246.366 68.3968H253.412C255.588 68.3968 257.311 68.9157 258.582 69.9535C259.853 70.9913 260.488 72.5284 260.488 74.5648C260.488 76.0725 260.113 77.3061 259.362 78.2655C258.63 79.2054 257.629 79.8613 256.358 80.2334L260.806 88.0461C260.863 88.1636 260.892 88.2713 260.892 88.3692C260.892 88.5258 260.825 88.6629 260.69 88.7804C260.575 88.8978 260.44 88.9566 260.286 88.9566H258.9C258.572 88.9566 258.332 88.8685 258.178 88.6923C258.024 88.516 257.889 88.3398 257.773 88.1636L253.586 80.7033H248.532V88.2811C248.532 88.4769 248.464 88.6433 248.33 88.7804C248.214 88.8978 248.05 88.9566 247.839 88.9566H246.366ZM248.532 78.2068H253.297C254.741 78.2068 255.819 77.9033 256.531 77.2963C257.244 76.6697 257.6 75.7494 257.6 74.5354C257.6 73.341 257.244 72.4305 256.531 71.8039C255.838 71.1773 254.76 70.864 253.297 70.864H248.532V78.2068Z"
        fill="#081224"
      />
    </svg>
  ),
  ExternalLink: ({ size = 16, ...props }: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.5888 2.0507C13.5101 2.01803 13.4238 2 13.3333 2H10L9.92225 2.00449C9.59069 2.043 9.33333 2.32478 9.33333 2.66667L9.33782 2.74441C9.37633 3.07597 9.65811 3.33333 10 3.33333H11.7239L6.19526 8.86193L6.1398 8.92473C5.93645 9.18626 5.95494 9.56442 6.19526 9.80474C6.45561 10.0651 6.87772 10.0651 7.13807 9.80474L12.6667 4.27614V6L12.6712 6.07775C12.7097 6.40931 12.9914 6.66667 13.3333 6.66667C13.7015 6.66667 14 6.36819 14 6V2.66667C14 2.64091 13.9985 2.61516 13.9956 2.58954L13.9955 2.58892C13.9884 2.52799 13.9731 2.46956 13.9508 2.41478C13.9182 2.33491 13.8695 2.26007 13.8047 2.19526C13.7409 2.13142 13.6673 2.08323 13.5888 2.0507ZM7.33333 4C7.70152 4 8 4.29848 8 4.66667C8 5.00856 7.74264 5.29034 7.41108 5.32885L7.33333 5.33333H4C3.65811 5.33333 3.37633 5.59069 3.33782 5.92225L3.33333 6V12C3.33333 12.3419 3.59069 12.6237 3.92225 12.6622L4 12.6667H10C10.3419 12.6667 10.6237 12.4093 10.6622 12.0777L10.6667 12V8.66667C10.6667 8.29848 10.9651 8 11.3333 8C11.6752 8 11.957 8.25736 11.9955 8.58892L12 8.66667V12C12 13.0651 11.1674 13.9358 10.1175 13.9966L10 14H4C2.93488 14 2.06423 13.1674 2.0034 12.1175L2 12V6C2 4.93488 2.83261 4.06423 3.88248 4.0034L4 4H7.33333Z"
        fill="currentColor"
      />
    </svg>
  ),
  ArrowRight: ({ size = 20, ...props }: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.8169 9.17967L11.9086 7.27515V7.26683C11.5752 6.93417 11.5752 6.41023 11.9086 6.08588C12.2336 5.75321 12.7586 5.75321 13.0919 6.08588L16.4252 9.41252C16.6218 9.60365 16.6995 9.87389 16.6583 10.1294C16.6263 10.3515 16.5055 10.546 16.3333 10.6756L13.083 13.9194C12.9247 14.0691 12.708 14.1606 12.4913 14.1606L12.4997 14.1697C12.2747 14.1697 12.058 14.0782 11.908 13.9285C11.5747 13.6042 11.5747 13.0719 11.8997 12.7476V12.7393L13.7997 10.843H4.16671C3.70004 10.843 3.33337 10.4687 3.33337 10.0113C3.33337 9.5456 3.70004 9.17967 4.16671 9.17967H13.8169Z"
        fill="currentColor"
      />
    </svg>
  ),
  ArrowUp: ({ size = 24, ...props }: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path
        d="M12 10.828L7.04999 15.778L5.63599 14.364L12 8L18.364 14.364L16.95 15.778L12 10.828Z"
        fill="currentColor"
      />
    </svg>
  ),
  Info: ({ size = 24, ...props }: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 25"
      fill="none"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 4.01074C7.58172 4.01074 4 7.59246 4 12.0107C4 16.429 7.58172 20.0107 12 20.0107C16.4183 20.0107 20 16.429 20 12.0107C20 7.59246 16.4183 4.01074 12 4.01074ZM2 12.0107C2 6.4879 6.47715 2.01074 12 2.01074C17.5228 2.01074 22 6.4879 22 12.0107C22 17.5336 17.5228 22.0107 12 22.0107C6.47715 22.0107 2 17.5336 2 12.0107Z"
        fill="#EE7108"
      />
      <path
        d="M13 8.01074C13 7.45846 12.5523 7.01074 12 7.01074C11.4477 7.01074 11 7.45846 11 8.01074V12.0107C11 12.563 11.4477 13.0107 12 13.0107C12.5523 13.0107 13 12.563 13 12.0107V8.01074Z"
        fill="#EE7108"
      />
      <path
        d="M12 15.0107C11.4477 15.0107 11 15.4585 11 16.0107C11 16.563 11.4477 17.0107 12 17.0107C12.5523 17.0107 13 16.563 13 16.0107C13 15.4585 12.5523 15.0107 12 15.0107Z"
        fill="#EE7108"
      />
    </svg>
  ),
  Discord: ({ size = 24, ...props }: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 25"
      fill="none"
      {...props}
    >
      <path
        d="M20.2415 5.85177C18.7257 5.15626 17.1003 4.64384 15.4007 4.35035C15.3698 4.34469 15.3389 4.35884 15.3229 4.38715C15.1139 4.75896 14.8823 5.24402 14.7202 5.62527C12.8922 5.35161 11.0736 5.35161 9.28318 5.62527C9.12099 5.23555 8.88103 4.75896 8.67104 4.38715C8.6551 4.35979 8.62418 4.34563 8.59323 4.35035C6.89465 4.6429 5.26918 5.15532 3.75245 5.85177C3.73932 5.85743 3.72807 5.86688 3.7206 5.87914C0.637438 10.4853 -0.207169 14.9783 0.207167 19.4155C0.209041 19.4372 0.221228 19.458 0.238101 19.4712C2.27228 20.965 4.24273 21.872 6.17659 22.4731C6.20754 22.4825 6.24034 22.4712 6.26003 22.4457C6.71749 21.821 7.12527 21.1623 7.4749 20.4696C7.49553 20.429 7.47584 20.3809 7.43366 20.3649C6.78686 20.1195 6.17097 19.8204 5.57852 19.4806C5.53166 19.4533 5.52791 19.3862 5.57102 19.3542C5.69569 19.2607 5.8204 19.1635 5.93944 19.0654C5.96098 19.0475 5.99099 19.0437 6.01631 19.055C9.90842 20.832 14.1221 20.832 17.9683 19.055C17.9936 19.0427 18.0236 19.0465 18.0461 19.0644C18.1652 19.1626 18.2898 19.2607 18.4154 19.3542C18.4585 19.3862 18.4557 19.4533 18.4089 19.4806C17.8164 19.827 17.2005 20.1195 16.5528 20.3639C16.5106 20.38 16.4919 20.429 16.5125 20.4696C16.8696 21.1613 17.2774 21.82 17.7264 22.4448C17.7452 22.4712 17.7789 22.4825 17.8099 22.4731C19.7531 21.872 21.7235 20.965 23.7577 19.4712C23.7755 19.458 23.7868 19.4382 23.7887 19.4165C24.2845 14.2865 22.9581 9.8304 20.2724 5.88008C20.2659 5.86688 20.2546 5.85743 20.2415 5.85177ZM8.05612 16.7137C6.88433 16.7137 5.91881 15.6379 5.91881 14.3167C5.91881 12.9955 6.86561 11.9197 8.05612 11.9197C9.25598 11.9197 10.2122 13.005 10.1934 14.3167C10.1934 15.6379 9.2466 16.7137 8.05612 16.7137ZM15.9585 16.7137C14.7867 16.7137 13.8212 15.6379 13.8212 14.3167C13.8212 12.9955 14.768 11.9197 15.9585 11.9197C17.1584 11.9197 18.1145 13.005 18.0958 14.3167C18.0958 15.6379 17.1584 16.7137 15.9585 16.7137Z"
        fill="currentColor"
      />
    </svg>
  ),
  Burgher: ({ size = 24, color, ...props }: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 5C20.5523 5 21 5.44772 21 6C21 6.51284 20.614 6.93551 20.1166 6.99327L20 7H4C3.44772 7 3 6.55228 3 6C3 5.48716 3.38604 5.06449 3.88338 5.00673L4 5H20ZM20 11C20.5523 11 21 11.4477 21 12C21 12.5128 20.614 12.9355 20.1166 12.9933L20 13H4C3.44772 13 3 12.5523 3 12C3 11.4872 3.38604 11.0645 3.88338 11.0067L4 11H20ZM21 18C21 17.4477 20.5523 17 20 17H4L3.88338 17.0067C3.38604 17.0645 3 17.4872 3 18C3 18.5523 3.44772 19 4 19H20L20.1166 18.9933C20.614 18.9355 21 18.5128 21 18Z"
        fill="currentColor"
      />
    </svg>
  ),
  Close: ({ size = 24, color, ...props }: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.38249 6.17975C7.04624 5.9183 6.56004 5.94207 6.25105 6.25105C5.91632 6.58579 5.91632 7.1285 6.25105 7.46323L10.7878 12L6.25105 16.5368L6.17975 16.6175C5.9183 16.9538 5.94207 17.44 6.25105 17.7489C6.58579 18.0837 7.1285 18.0837 7.46323 17.7489L12 13.2122L16.5368 17.7489L16.6175 17.8203C16.9538 18.0817 17.44 18.0579 17.7489 17.7489C18.0837 17.4142 18.0837 16.8715 17.7489 16.5368L13.2122 12L17.7489 7.46323L17.8203 7.38249C18.0817 7.04624 18.0579 6.56004 17.7489 6.25105C17.4142 5.91632 16.8715 5.91632 16.5368 6.25105L12 10.7878L7.46323 6.25105L7.38249 6.17975Z"
        fill="currentColor"
      />
    </svg>
  ),
  PSE: ({ size = 20, color, ...props }: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      {...props}
    >
      <path
        d="M20 11.2555C20 11.6184 19.742 11.9198 19.4012 11.9895C19.3525 11.9992 19.3022 12.0041 19.2503 12.0041H16.7465C16.331 12.0041 15.9951 12.3395 15.9951 12.7543V15.2545C15.9951 15.5138 15.8637 15.7406 15.6641 15.8767C15.5846 15.9302 15.4937 15.9691 15.3963 15.9901C15.3477 15.9999 15.2974 16.0047 15.2454 16.0047H12.7416C12.3262 16.0047 11.9903 16.3401 11.9903 16.7549V19.2552C11.9903 19.67 11.6544 20.0054 11.2389 20.0054H8.73509C8.31968 20.0054 7.98377 19.67 7.98377 19.2552V16.7549C7.98377 16.3401 8.31968 16.0047 8.73509 16.0047H11.2389C11.6544 16.0047 11.9903 15.6693 11.9903 15.2545V12.7543C11.9903 12.3395 12.3262 12.0041 12.7416 12.0041H15.2454C15.6609 12.0041 15.9968 11.6687 15.9968 11.2539V8.00343C15.9968 5.79975 14.2118 4.01088 12.0049 4.0044C9.79959 4.0125 8.01298 5.79975 8.01298 8.00343V11.2539C8.01298 11.6687 7.67708 12.0041 7.26166 12.0041H4.75781C4.34239 12.0041 4.00649 12.3395 4.00649 12.7543V19.2552C4.00649 19.67 3.67059 20.0054 3.25517 20.0054H0.751319C0.335903 20.0054 0 19.67 0 19.2552V12.7543C0 12.3395 0.335903 12.0041 0.751319 12.0041H3.25517C3.67059 12.0041 4.00649 11.6687 4.00649 11.2539V7.98884C4.00649 3.57987 7.58621 0.00537109 12.0032 0.00537109C16.4203 0.00537109 20 3.57987 20 7.99046V11.2555Z"
        fill="currentColor"
      />
    </svg>
  ),
  Community: ({ size = 20, color, ...props }: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 21 22"
      fill="none"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.875 2.25537C5.45875 2.25537 3.5 4.21413 3.5 6.63037C3.5 9.04662 5.45875 11.0054 7.875 11.0054C10.2912 11.0054 12.25 9.04662 12.25 6.63037C12.25 4.21413 10.2912 2.25537 7.875 2.25537ZM7.875 4.00537C9.32475 4.00537 10.5 5.18062 10.5 6.63037C10.5 8.08012 9.32475 9.25537 7.875 9.25537C6.42525 9.25537 5.25 8.08012 5.25 6.63037C5.25 5.18062 6.42525 4.00537 7.875 4.00537ZM13.996 16.9406C13.8966 14.6124 11.9777 12.7554 9.625 12.7554H6.125L5.93522 12.7594C3.60702 12.8588 1.75 14.7777 1.75 17.1304V18.8804L1.75589 18.9824C1.80643 19.4176 2.17627 19.7554 2.625 19.7554C3.10825 19.7554 3.5 19.3636 3.5 18.8804V17.1304L3.50446 16.9761C3.5843 15.5982 4.72703 14.5054 6.125 14.5054H9.625L9.77924 14.5098C11.1572 14.5897 12.25 15.7324 12.25 17.1304V18.8804L12.2559 18.9824C12.3064 19.4176 12.6763 19.7554 13.125 19.7554C13.6082 19.7554 14 19.3636 14 18.8804V17.1304L13.996 16.9406ZM13.1523 3.02709C13.2722 2.55894 13.7489 2.2766 14.217 2.39646C16.1529 2.89212 17.5069 4.63646 17.5069 6.63475C17.5069 8.63304 16.1529 10.3774 14.217 10.873C13.7489 10.9929 13.2722 10.7106 13.1523 10.2424C13.0325 9.77426 13.3148 9.29758 13.783 9.17771C14.9445 8.88032 15.7569 7.83372 15.7569 6.63475C15.7569 5.43577 14.9445 4.38917 13.783 4.09178C13.3148 3.97191 13.0325 3.49523 13.1523 3.02709ZM15.9687 12.9144C15.5008 12.7936 15.0236 13.075 14.9028 13.5429C14.782 14.0108 15.0634 14.488 15.5313 14.6088C16.6848 14.9067 17.4932 15.944 17.5 17.1354L17.5 18.8804L17.5059 18.9824C17.5564 19.4176 17.9263 19.7554 18.375 19.7554C18.8582 19.7554 19.25 19.3636 19.25 18.8804V17.1304L19.2444 16.9322C19.1481 15.0258 17.8273 13.3942 15.9687 12.9144Z"
        fill="currentColor"
      />
    </svg>
  ),
};
