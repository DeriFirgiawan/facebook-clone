import ImageProfileDummy from '../../../Assets/Logo/dummyProfile.jpg'

export const ImageProfile = ({alt, size}) => {
  return <img className={"bg-grey-50 radius-50 wh-" + size} src={ImageProfileDummy} alt={alt} />
}

ImageProfile.defaultProps = {
  size: "24"
}
