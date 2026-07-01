import { StyleSheet, View } from 'react-native';
import { type IconProps, sizeType } from './types';
// import { useTheme } from '../../hooks/useTheme';
import ArrowLeft from './ArrowLeft';
import StarEmpty from './StarEmpty';
import StarHalf from './StarHalf';
import StarFull from './StarFull';
import Check from './Check';
import X from './X';
import LoaderCircle from './LoaderCircle';
import Apple from './Apple';
import Facebook from './Facebook';
import Google from './Google';
import Kakaotalk from './Kakaotalk';
import Naver from './Naver';
import ChevronDown from './ChevronDown';
import ArrowDownToLine from './ArrowDownToLine';
import ArrowDownWideNarrow from './ArrowDownWideNarrow';
import RotateCw from './RotateCw';
import SquareArrowOutUpRight from './SquareArrowOutUpRight';
import Bookmark from './Bookmark';
import Calendar from './Calendar';
import Download from './Download';
import Ellipsis from './Ellipsis';
import Heart from './Heart';
import House from './House';
import Image from './Image';
import Info from './Info';
import Link from './Link';
import MapPin from './MapPin';
import Maximize from './Maximize';
import Menu from './Menu';
import Minimize from './Minimize';
import Pencil from './Pencil';
import Play from './Play';
import Plus from './Plus';
import Search from './Search';
import Settings from './Settings';
import Share from './Share2';
import Trash from './Trash2';
import Unplug from './Unplug';
import User from './User';
import Tune from './Tune';
import Copy from './Copy';

const iconMap = {
  back: ArrowLeft,
  star_empty: StarEmpty,
  star_half: StarHalf,
  star_full: StarFull,
  check: Check,
  close: X,
  loaderCircle: LoaderCircle,
  apple: Apple,
  facebook: Facebook,
  google: Google,
  kakaotalk: Kakaotalk,
  naver: Naver,
  down: ChevronDown,
  bookmark: Bookmark,
  calendar: Calendar,
  download: Download,
  ellipsis: Ellipsis,
  heart: Heart,
  house: House,
  image: Image,
  info: Info,
  link: Link,
  mapPin: MapPin,
  maximize: Maximize,
  menu: Menu,
  minimize: Minimize,
  pencil: Pencil,
  play: Play,
  plus: Plus,
  search: Search,
  settings: Settings,
  share: Share,
  trash: Trash,
  unplug: Unplug,
  user: User,
  tune: Tune,
  download2: ArrowDownToLine,
  sort: ArrowDownWideNarrow,
  copy: Copy,
  rotateCw: RotateCw,
  squareArrowOutUpRight: SquareArrowOutUpRight,
} as const;

// TODO: 여기에 없는 아이콘을 추가해야할때에 대한 솔루션 필요? 필요한 아이콘이 생길때마다 새로 추가해야하나?
export const CommonIcon = ({
  iconType,
  size = 'm',
  color = 'black',
  ...props
}: IconProps) => {
  // const { theme } = useTheme();

  const IconComponent = iconMap[iconType];
  if (!IconComponent) {
    return null;
  }

  return (
    <View style={styles.container} {...props}>
      <IconComponent
        width={sizeType[size]}
        height={sizeType[size]}
        color={color}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // margin: 5,
    // padding: 5,
  },
});
