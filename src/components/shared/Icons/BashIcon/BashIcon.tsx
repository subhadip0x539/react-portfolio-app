import { IIconProps } from "../../../../types/components/icon";

export function BashIcon(props: IIconProps) {
  const { fill, size, className } = props;

  return (
    <svg
      width={size || 24}
      height={size || 24}
      viewBox="0 0 24 24"
      fill={fill || "none"}
      className={className}
    >
      <path
        d="M20.9956 4.89017L13.436 0.401905C12.5375 -0.133968 11.4175 -0.133968 10.519 0.401905L2.95782 4.89017C2.04831 5.43885 1.49457 6.42558 1.50004 7.48776V16.4628C1.4951 17.5244 2.04878 18.5104 2.95782 19.0588L10.5175 23.5456C11.4161 24.0811 12.5359 24.0811 13.4345 23.5456L20.9941 19.0588C21.9042 18.5105 22.4586 17.5237 22.4534 16.4613V7.48776C22.4589 6.42558 21.9051 5.43885 20.9956 4.89017Z"
        fill="white"
      />
      <path
        d="M21.0386 4.90094L13.4623 0.402791C12.5618 -0.134264 11.4393 -0.134264 10.5389 0.402791L2.96103 4.90094C2.04952 5.45083 1.49456 6.43973 1.50004 7.50425V16.499C1.49509 17.563 2.04999 18.5512 2.96103 19.1008L10.5373 23.5975C11.4379 24.1342 12.5602 24.1342 13.4608 23.5975L21.0371 19.1008C21.9492 18.5513 22.5047 17.5623 22.4996 16.4975V7.50425C22.5051 6.43973 21.9501 5.45083 21.0386 4.90094ZM10.8028 23.1378L3.22652 18.6412C2.47782 18.1875 2.0218 17.3745 2.02497 16.499V7.50425C2.0215 6.62875 2.4776 5.8156 3.22652 5.36213L10.8028 0.863984C11.5402 0.424085 12.4594 0.424085 13.1968 0.863984L20.767 5.36213C21.3911 5.74012 21.8168 6.37397 21.9306 7.09464C21.6788 6.55911 21.1129 6.41195 20.453 6.79122L13.2908 11.2272C12.3973 11.7475 11.7389 12.3346 11.7374 13.4118V22.2442C11.7374 22.889 11.9968 23.3062 12.3973 23.4291C12.2661 23.4531 12.1331 23.4658 11.9998 23.467C11.5785 23.4667 11.165 23.353 10.8028 23.1378Z"
        fill="#2F3A3E"
      />
      <path
        d="M19.0319 17.3496L17.1488 18.4758C17.0984 18.4961 17.0646 18.5441 17.0625 18.5984V19.0934C17.0625 19.154 17.1034 19.1782 17.1533 19.1494L19.0652 17.9869C19.112 17.9518 19.1344 17.8928 19.1227 17.8355V17.401C19.1212 17.345 19.0773 17.3208 19.0319 17.3496Z"
        fill="#3AB14A"
      />
      <path
        d="M15.0246 13.2028C15.0852 13.1726 15.1351 13.2028 15.1366 13.2891L15.1427 13.9461C15.3691 13.8432 15.6218 13.8125 15.8663 13.8583C15.9132 13.8704 15.9329 13.934 15.9147 14.0097L15.7709 14.5864C15.76 14.6299 15.7375 14.6697 15.7058 14.7014C15.6947 14.7124 15.6819 14.7216 15.668 14.7287C15.6509 14.7379 15.6311 14.7411 15.612 14.7378C15.3736 14.685 15.124 14.725 14.9141 14.8498C14.6072 14.988 14.4066 15.2898 14.3979 15.6263C14.3979 15.9291 14.5493 16.0123 15.0776 16.0214C15.7754 16.0335 16.0782 16.3378 16.0858 17.0417C16.0691 17.7764 15.7304 18.4667 15.1593 18.9293L15.1715 19.5742C15.1704 19.6543 15.1288 19.7284 15.061 19.771L14.6795 19.9905C14.6189 20.0208 14.569 19.9905 14.5675 19.9057V19.2714C14.2405 19.4077 13.909 19.4395 13.6971 19.3547C13.6577 19.3396 13.6395 19.2805 13.6562 19.2124L13.7939 18.6296C13.8044 18.5835 13.8281 18.5414 13.8621 18.5085C13.8728 18.4982 13.8851 18.4895 13.8984 18.4828C13.9181 18.4739 13.9407 18.4739 13.9605 18.4828C14.2303 18.5559 14.5181 18.5195 14.7612 18.3814C15.112 18.2122 15.34 17.8624 15.3531 17.4731C15.3531 17.1461 15.173 17.0099 14.7476 17.0069C14.1981 17.0069 13.688 16.9009 13.6774 16.0986C13.69 15.3977 14.0154 14.7392 14.5644 14.3033L14.5372 13.6433C14.537 13.5621 14.5788 13.4865 14.6477 13.4435L15.0246 13.2028Z"
        fill="white"
      />
    </svg>
  );
}
