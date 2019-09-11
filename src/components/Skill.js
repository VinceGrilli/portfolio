import React from 'react';
import { Image } from 'rebass';
import { Tooltip } from 'react-tippy';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const SkillIcon = styled(Image)`
  transition: transform 0.5s ease;

  &:hover {
    transform: scale(1.2);
    box-shadow: 0 12px 16px rgba(0, 0, 0, 0.2);
  }
`;

const Skill = ({ name, logo }) => (
  <Tooltip title={name} position="bottom" trigger="mouseenter">
    <SkillIcon src={logo} alt={name} />
  </Tooltip>
);

Skill.propTypes = {
  name: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
};

export default Skill;
