import { Anchor, Button } from "@zendeskgarden/react-buttons";
import { LG, MD } from "@zendeskgarden/react-typography";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const Container = styled.div`
  padding: ${(p) => p.theme.space.xl} 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${(props) => props.theme.space.md};
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: ${(props) => props.theme.space.xxs};
`;

export const EmptyState = ({ helpCenterPath }: { helpCenterPath: string }) => {
  const handleRedirect = () => {
    window.location.href = helpCenterPath;
  };
  const { t } = useTranslation();
  return (
    <Container>
      <TextContainer>
        <LG>
          {t("service-catalog.empty-state.no-services", "No services in sight")}
        </LG>
        <MD>
          {t(
            "service-catalog.empty-state.description",
            "Once services are added to catalog, you'll find them here."
          )}
        </MD>
        <Anchor isExternal href="#" target="_blank">
          {/* Link will be updated when we will have support article */}
          {t(
            "service-catalog.empty-state.support-article-link",
            "Learn about the service catalog"
          )}
        </Anchor>
      </TextContainer>
      <Button isPrimary onClick={handleRedirect}>
        {t("service-catalog.empty-state.go-to-homepage", "Go to the homepage")}
      </Button>
    </Container>
  );
};
