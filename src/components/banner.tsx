import React from 'react';
import { css, SerializedStyles } from '@emotion/core';

const bannerLink =
  'https://nodejs.org/en/blog/vulnerability/february-2020-security-releases/';
const banner: SerializedStyles = css`
  position: relative;
  font-weight: bold;
  background-color: var(--black3);
  font-size: var(--font-size-display2);
  color: var(--color-text-primary);
  border-radius: 5px;
  text-align: center;
  padding-top: 5px;
`;

const bannerCta: SerializedStyles = css`
  border-radius: 5.6rem;
  background: var(--purple5);
  color: var(--color-fill-top-nav);
  margin-right: var(--space-32);
  position: relative;
`;
const bannerButtonText: SerializedStyles = css`
  color: var(--color-fill-top-nav);
  line-height: var(--line-height-subheading);
  text-decoration: none;
  font-family: var(--sans);
  font-style: normal;
  font-weight var(--font-weight-semibold);
`;

/**
 * The banner is used for displaying upcoming Nodejs events and important announcements ex. security updates
 * Usage
 * <p css={{
 *     paddingTop: 'var(--space-08)',
 *     paddingBottom: 'var(--space-08)',
 *      }}>
 *  <button css={bannerCta} type="button">
 *    <a css={bannerButtonText} href={bannerLink}>
 *      Blog post
 *    </a>
 *  </button>
 *  New security releases now available for all release lines
 *</p>
 */
const Banner = (): JSX.Element => {
  return (
    <div css={banner}>
      <p
        css={{
          paddingTop: 'var(--space-08)',
          paddingBottom: 'var(--space-08)',
        }}
      >
        <button css={bannerCta} type="button">
          <a css={bannerButtonText} href={bannerLink}>
            Blog post
          </a>
        </button>
        New security releases now available for all release lines
      </p>
    </div>
  );
};

export default Banner;
