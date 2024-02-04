import { IIconProps } from "../../../../types/proptypes";

export function Ctf(props: IIconProps) {
  const { fill, size, className } = props;

  return (
    <svg
      width={size || 24}
      height={size || 24}
      viewBox="0 0 24 24"
      fill={fill || "currentColor"}
      className={className}
    >
      <path d="M9.04545 23.0003L9.37587 22.908C9.69369 22.8191 9.87933 22.4895 9.79053 22.1716L4.5092 3.54591C4.45589 3.35512 4.32897 3.19332 4.15636 3.09611C3.98376 2.9989 3.77961 2.97425 3.58882 3.02756L3.54615 3.03948C3.14883 3.15049 2.91674 3.56257 3.02774 3.95988L8.30916 22.5856C8.39797 22.9035 8.72762 23.0891 9.04545 23.0003Z" />
      <path d="M7.26034 11.4035C7.30924 11.5715 7.43819 11.7043 7.60463 11.7582C7.77107 11.8121 7.9534 11.78 8.09145 11.6726C11.7634 8.93029 17.38 13.1523 20.707 9.17512C20.8865 8.95851 20.9205 8.56243 20.7782 8.50054C19.5802 7.90318 18.4719 7.14071 17.4857 6.23542C17.4028 6.15954 17.3704 6.04306 17.4022 5.93526C17.8908 4.08671 18.2537 2.20719 18.4883 0.309593C18.5254 -0.00603738 18.3552 -0.0988721 18.1758 0.117738C14.7305 4.23817 8.82373 -0.441576 5.17343 2.93885C5.02553 3.07401 4.96594 3.28071 5.01917 3.47386L7.26034 11.4035Z" />
    </svg>
  );
}
