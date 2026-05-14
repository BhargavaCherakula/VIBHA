import { Link } from 'react-router-dom';
import { Product } from '../types';
import { motion } from 'motion/react';

interface ProductCardProps {
  product: Product;
  key?: string | number;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group"
    >
      <Link to={`/product/${product.id}`} className="block space-y-6">
        <div className="relative aspect-[3/4] overflow-hidden rounded-t-[80px] rounded-b-xl bg-muted-bg border border-border">
          <img
            src={product.images[0]}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          {product.originalPrice && (
            <div className="absolute top-6 left-6 bg-primary text-white px-4 py-1.5 rounded-full text-[9px] font-bold tracking-[0.2em] uppercase shadow-lg">
              Sale
            </div>
          )}
        </div>
        
        <div className="space-y-2 px-2">
          <p className="text-[9px] uppercase tracking-[0.3em] text-primary font-bold">{product.category}</p>
          <div className="space-y-1">
            <h3 className="text-xl font-serif leading-tight group-hover:text-primary transition-colors">
              {product.name}
            </h3>
            <p className="text-[10px] text-ink/30 font-mono tracking-tighter">ID: {product.id}</p>
          </div>
          <div className="pt-2 flex items-baseline gap-2">
            <p className="text-lg font-light">{product.price}</p>
            {product.originalPrice && (
              <p className="text-xs text-ink/30 line-through font-light">{product.originalPrice}</p>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
