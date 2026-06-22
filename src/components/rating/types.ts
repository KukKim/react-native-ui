type Variant = 'primary' | 'secondary';
type SizeVariant = 's' | 'm' | 'l';

export const sizeType: Record<SizeVariant, number> = {
  s: 20,
  m: 24,
  l: 28,
};

export interface RatingProps {
  type?: Variant;
  value: number;
  onChange?: (rating: number) => void;
  editable?: boolean;
  size?: SizeVariant;
  maxRating?: number;
}
