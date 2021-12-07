import { BigNumber } from 'ethers';
import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { StandaloneNounWithSeed } from '../../components/StandaloneNoun';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setStateBackgroundColor } from '../../state/slices/application';
import { grey, beige } from '../../utils/nounBgColors';
import { INounSeed } from '../../wrappers/nounToken';

import { useQuery } from '@apollo/client';
import { nounQuery } from '../../wrappers/subgraph';

import classes from './Profile.module.css';

import NounInfoCard from '../../components/NounInfoCard';
import ProfileActivityFeed from '../../components/ProfileActivityFeed';

interface ProfilePageProps {
  nonameId: number;
}

const ProfilePage: React.FC<ProfilePageProps> = props => {
  const { nonameId } = props;

  const dispatch = useAppDispatch();
  const lastAuctionNounId = useAppSelector(state => state.onDisplayAuction.lastAuctionNounId);
  let stateBgColor = useAppSelector(state => state.application.stateBackgroundColor);

  const { loading, error, data } = useQuery(nounQuery(nonameId.toString()));

  const hasOwner = data !== undefined && data.noname.owner.id !== '0x0000000000000000000000000000000000000000';


  const loadedNounHandler = (seed: INounSeed) => {
    dispatch(setStateBackgroundColor(grey));
  };

  if (!lastAuctionNounId) {
    return <></>;
  }

  const nounIdForDisplay = Math.min(nonameId, lastAuctionNounId);

  const nounContent = (
    <StandaloneNounWithSeed
      nounId={BigNumber.from(nounIdForDisplay)}
      onLoadSeed={loadedNounHandler}
      shouldLinkToProfile={false}
    />
  );

  return (
    <>
      <div style={{ backgroundColor: stateBgColor }}>
        <Container>
          <Row>
            <Col lg={6}>{nounContent}</Col>
            <Col lg={6} className={classes.nounProfileInfo}>
              <NounInfoCard nounId={nounIdForDisplay} />
            </Col>
          </Row>
        </Container>
      </div>
      {hasOwner && <ProfileActivityFeed nounId={nounIdForDisplay} />}
    </>
  );
};

export default ProfilePage;
