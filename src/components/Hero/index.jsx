import React from 'react';
import parse from 'html-react-parser';
import './hero.scss';
import Div from '../Div';
import VerticalLinks from '../VerticalLinks';

export default function Hero({
  title,
  subtitle,
  scrollDownId,
  socialLinksHeading,
  heroSocialLinks,
  bgImageUrl,
  phoneNumber,
  email,
}) {
  return (
    <Div
      className="cs-hero cs-style1 cs-bg cs-fixed_bg cs-shape_wrap_1"
      style={{ backgroundImage: `url(${bgImageUrl})` }}
    >
      <Div className="cs-shape_1" />
      <Div className="cs-shape_1" />
      <Div className="cs-shape_1" />
      <Div className="container">
        <Div className="cs-hero_text">
          <h1 className="cs-hero_title">{parse(title)}</h1>
          <Div className="cs-hero_info justify-content-center">
            <Div>
              <Div className="cs-hero_subtitle">{subtitle}</Div>
            </Div>
          </Div>
        </Div>
      </Div>
      <VerticalLinks data={heroSocialLinks} title={socialLinksHeading} />
      {(phoneNumber || email) && (
        <Div className="cs-hero_social_wrap cs-left_side cs-primary_font cs-primary_color">
          <ul className="cs-hero_social_links">
            {email && (
              <li>
                <span>{email}</span>
              </li>
            )}
            {phoneNumber && (
              <li>
                <span>{phoneNumber}</span>
              </li>
            )}
          </ul>
        </Div>
      )}
      <a href={scrollDownId} className="cs-down_btn">
        .
      </a>
    </Div>
  );
}
