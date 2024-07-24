'use client';

import { CSSProperties, FormEvent, useState } from 'react';
import styles from '../page.module.css';
import { useSearchParams } from 'next/navigation';
import { generativeRecolor } from '@cloudinary/url-gen/actions/effect';
import { CloudinaryImage, Cloudinary } from '@cloudinary/url-gen';

const cloudinary = new Cloudinary({
  cloud: {
    cloudName: 'chukwutosin',
  },
});

export default function TryOut() {
  const searchParams = useSearchParams();
  const [imageUrl, setImageUrl] = useState(
    'https://res.cloudinary.com/chukwutosin/image/upload/v1719393496/88c187367b7f6114f8b3901046c20d2b_n3cywg.webp'
  );
  const [prompts, setPrompts] = useState('');

  const imageRelativePath: string =
    '88c187367b7f6114f8b3901046c20d2b_n3cywg.webp';
  const colour: string = searchParams.get('colour') || '';

  const colorStyle: CSSProperties = {
    color: colour || 'initial',
    textDecoration: 'underline',
  };

  async function recolor(e: FormEvent) {
    e.preventDefault();

    if (!prompts) return;

    const img: CloudinaryImage = cloudinary
      .image(imageRelativePath)
      .effect(generativeRecolor(prompts.split(','), colour));

    setImageUrl(img.toURL());
  }

  return (
    <main className={styles.main}>
      <h1>
        Try Out{' '}
        <span style={colorStyle}>
          {colour?.replace(colour.charAt(0), colour.charAt(0).toUpperCase())}
        </span>{' '}
        Paint
      </h1>
      <div className={styles['try-out-image']}>
        <img className={styles.img} src={imageUrl} alt='living area' />
      </div>
      <div className={styles['try-out-area']}>
        <span>
          You can add multiple items, separated by comma (`,`). e.g. 'left wall,
          right wall, window'
        </span>

        <div className={styles['try-out-input']}>
          <p>Item(s) to paint: </p>
          <input
            type='text'
            value={prompts}
            onChange={(e) => setPrompts(e.target.value)}
          />
          <button className={styles.button} onClick={recolor}>
            Try It!
          </button>
        </div>
      </div>
    </main>
  );
}
