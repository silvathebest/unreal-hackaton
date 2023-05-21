import React, {FC} from 'react'

interface IconProps {
  path: string;
  className?: string;
  restProps?: { [key: string]: any };
}

const Icon: FC<IconProps> = ({path, className = '', restProps = {}}) => {
  return (
    <img src={path} className={className} {...restProps} />
  )
}

export default Icon
