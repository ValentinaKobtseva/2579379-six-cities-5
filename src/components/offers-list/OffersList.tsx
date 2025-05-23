import { Card } from '../card/Card';
import { OfferType, CardType, CardSize } from '../../types';

type OffersListProps = {
  offers: OfferType[];
  onItemMouseHover?: (offerId: string) => void;
  onItemMouseLeave?: () => void;
  cardType: CardType;
  size: CardSize;
}

export const OffersList = ({offers, onItemMouseHover, onItemMouseLeave, cardType, size}: OffersListProps) => (
  <>
    {offers.map((item) => (
      <Card
        key={item.id}
        offer={item}
        cardType={cardType}
        size={size}
        onMouseHover={() => onItemMouseHover?.(item.id)}
        onMouseLeave={() => onItemMouseLeave?.()}
      />)
    )}
  </>
);
