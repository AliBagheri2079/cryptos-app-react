import styled from 'styled-components';

const Container = styled.section`
  --max-width: 80rem;

  max-width: var(--max-width);
  padding-inline: ${props => props.theme.sizes.md};
  margin-inline: auto;
`;

const Group = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: ${props => props.theme.sizes.md};
`;

const ImageRoot = styled.div`
  width: 100%;
`;

const Image = styled.img`
  --max-height: 50rem;

  max-width: 100%;
  max-height: var(--max-height);
  object-fit: cover;
  margin-inline: auto;

  &:hover {
    filter: brightness(0.85);
  }
`;

const Button = styled.button<{ $primary?: boolean }>`
  padding-inline: ${props => props.theme.sizes.md};
  padding-block: ${props => props.theme.sizes.sm};
  color: ${props => props.$primary && props.theme.colors.main};
  border: ${props => props.theme.sizes.xs} solid
    ${props => props.theme.colors.main};
  border-radius: ${props => props.theme.sizes.sm};

  background-color: transparent;
  text-decoration: none;
  user-select: none;
  cursor: pointer;
`;

export { Container, Group, ImageRoot, Image, Button };
