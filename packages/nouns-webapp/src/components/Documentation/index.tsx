import Section from '../../layout/Section';
import { Col } from 'react-bootstrap';
import classes from './Documentation.module.css';
import Accordion from 'react-bootstrap/Accordion';
import Link from '../Link';
import { CURRENCY_SYMBOL } from '../../config';

const Documentation = () => {
  const playgroundLink = <Link text="nonames playground" url="/playground" leavesPage={false} />;
  const publicDomainLink = (
    <Link
      text="public domain"
      url="https://creativecommons.org/publicdomain/zero/1.0/"
      leavesPage={true}
    />
  );
  const compoundGovLink = (
    <Link text="Compound Governance" url="https://compound.finance/governance" leavesPage={true} />
  );
  return (
    <Section fullWidth={false}>
      <Col lg={{ span: 10, offset: 1 }}>
        <div className={classes.headerWrapper}>
          <h1>What is Noname DAO?</h1>
          <p>
            Noname DAO is an experimental community that aims to build a new method of investors and founders collaboration. Nonamers can share and propose their knowledge of profitable investment options which the whole community can profit from using its large accumulated funds once DAO decides to approve it.
          </p>
          <p>
            It's the ultimate membership powered by a community of blockchain founders, investors, and experts bound together by shared values and shared incentives.
          </p>
          <p>
            Mission of Noname DAO is to fund awesome projects that people really need in the crypto area through collective voting using a collective treasury.
          </p>
          <p>
            Learn more about on-chain nonames below, or make some off-chain nonames using{' '}
            {playgroundLink}.
          </p>
        </div>
        <Accordion flush>
          <Accordion.Item eventKey="0" className={classes.accordionItem}>
            <Accordion.Header className={classes.accordionHeader}>
              How to get {CURRENCY_SYMBOL}
            </Accordion.Header>
            <Accordion.Body>
              <p>
                You can get {CURRENCY_SYMBOL} from the most of crypto exchanges like Binance or Bitfinex.
              </p>
              <p>
                Also, there are more ways well described in <a href="https://youtu.be/tFK8a28gJZ0" target="_blank" rel="noreferrer">this detailed video</a>.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className={classes.accordionItem}>
            <Accordion.Header className={classes.accordionHeader}>Concept</Accordion.Header>
            <Accordion.Body>
              <ul>
                <li>Noname's NFT are generated on-chain, 1 NFT once a day, forever. No NFT is preliminary created, though it can be predicted looking at previous block hash.</li>
                <li>Every NFT is auctioned trustlessly, 100% of the funds received go to the Noname Treasury.</li>
                <li>Every 10th NFT until N=1337 (~4 years) goes to Noname's Founders Vault as a compensation (multisig contract controlled by founders); Founders can't transfer their NFT until Noname #360 is received.</li>
                <li>Every Nonamer can make a proposal to spend some money from the treasury. NFTs are locked until voting ends. A well-written and motivating proposal has more chances to be successfully settled. Voting starts 3 days after proposal submission and lasts for 4 more days.</li>
                <li>The more #Nonames you have, the more reward you can claim on the treasury reward distribution.</li>
                <li>Number of NFTs required for creating a proposal and for quorum is set with BPS (%) from the current token supply (BPS is defined in DAO).</li>
                <li>Any participant can vote for or against any proposal during its voting window, locking theirs NFT (1 NFT for 1 vote).</li>
                <li>Noname's Founders Vault can veto any proposal until it's executed.</li>
                <li>Besides text description, proposal contains specific instructions to perform by DAO smart contract: call method, pass arguments, etc, i.e. transfer 20000 USDT to 0xabc123…</li>
                <li>Once settled, proposal is executed if more participants voted for it or just closes otherwise. All locked NFTs by that proposal are unlocked then.</li>
                <li>DAO smart contract has a method to secure a community reward. Every NFT is considered as a pool share here. After the successful call, Nonamers can claim their reward from the DAO.</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2" className={classes.accordionItem}>
            <Accordion.Header className={classes.accordionHeader}>Daily Auctions</Accordion.Header>
            <Accordion.Body>
              <p>
                The Noname Auction Contract acting as a self-sufficient generation and
                distribution mechanism, auctioning one Noname every 24 hours, forever.
                100% of auction proceeds ({CURRENCY_SYMBOL}) are automatically deposited in the Noname DAO treasury,
                where they are governed by Noname owners.
              </p>

              <p>
                Each time an auction is settled, the settlement transaction will
                also because a new Noname to be minted and a new 24-hour auction to begin.
              </p>
              <p>
                <b>Initial default price — 1500 {CURRENCY_SYMBOL}.</b>
              </p>
              <p>
                While settlement is most heavily incentivized for the winning bidder, it can be triggered by anyone, allowing the system
                to trustlessly auction Nonames as long as Polygon is operational and there are interested bidders&
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" className={classes.accordionItem}>
            <Accordion.Header className={classes.accordionHeader}>Noname DAO</Accordion.Header>
            <Accordion.Body>
              Noname DAO utilizes a fork of {compoundGovLink} and is the main governing body of the
              Noname ecosystem. The Noname DAO treasury receives 100% of {CURRENCY_SYMBOL} proceeds from daily noname
              auctions. Each noname is an irrevocable member of Noname DAO and entitled to one vote in
              all governance matters. Noname votes are non-transferable (if you sell your noname the
              vote goes with it) but delegatable, which means you can assign your vote to someone
              else as long as you own your noname.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4" className={classes.accordionItem}>
            <Accordion.Header className={classes.accordionHeader}>
              Governance ‘Slow Start’
            </Accordion.Header>
            <Accordion.Body>
              <p>
                In addition to the precautions taken by Compound Governance, Founders have given
                themselves a special veto right to ensure that no malicious proposals can be passed
                while the noname supply is low. This veto right will only be used if an obviously
                harmful governance proposal has been passed, and is intended as a last resort.
              </p>
              <p>
                Founders will proveably revoke this veto right when they deem it safe to do so. This
                decision will be based on a healthy noname distribution and a community that is
                engaged in the governance process.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5" className={classes.accordionItem}>
            <Accordion.Header className={classes.accordionHeader}>Noname Traits</Accordion.Header>
            <Accordion.Body>
              <p>
                Nonames are generated randomly based on block hashes. There are no 'if'
                statements or other rules governing noname trait scarcity, which makes all nonames
                equally rare. As of this writing, nonames are made up of:
              </p>
              <ul>
                <li>backgrounds (2) </li>
                <li>bodies (30)</li>
                <li>accessories (137) </li>
                <li>faces (234) </li>
                <li>tails (21)</li>
              </ul>
              You can experiment with off-chain noname generation at the {playgroundLink}.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="6" className={classes.accordionItem}>
            <Accordion.Header className={classes.accordionHeader}>
              On-Chain Artwork
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Nonames are stored directly on chain and do not utilize pointers to other networks
                such as IPFS. This is possible because noname parts are compressed and stored on-chain
                using a custom run-length encoding (RLE), which is a form of lossless compression.
              </p>

              <p>
                The compressed parts are efficiently converted into a single base64 encoded SVG
                image on-chain. To accomplish this, each part is decoded into an intermediate format
                before being converted into a series of SVG rects using batched, on-chain string
                concatenation. Once the entire SVG has been generated, it is base64 encoded.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="7" className={classes.accordionItem}>
            <Accordion.Header className={classes.accordionHeader}>
              Noname Seeder Contract
            </Accordion.Header>
            <Accordion.Body>
              <p>
                The Noname Seeder contract is used to determine Noname traits during the minting
                process. The seeder contract can be replaced to allow for future trait generation
                algorithm upgrades. Additionally, it can be locked by the Noname DAO to prevent any
                future updates. Currently, Noname traits are determined using pseudo-random number
                generation:
              </p>
              <code>keccak256(abi.encodePacked(blockhash(block.number - 1), nonameId))</code>
              <br />
              <br />
              <p>
                Trait generation is not truly random. Traits can be predicted when minting a Noname on
                the pending block.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="8" className={classes.accordionItem}>
            <Accordion.Header className={classes.accordionHeader}>
              Founders' Reward
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Founders are the group of five builders that initiated Nonames.
              </p>
              {/* <ul>
                <li>
                  <Link
                    text="@cryptoseneca"
                    url="https://twitter.com/cryptoseneca"
                    leavesPage={true}
                  />
                </li>
                <li>
                  <Link
                    text="@supergremplin"
                    url="https://twitter.com/supergremplin"
                    leavesPage={true}
                  />
                </li>
                <li>
                  <Link text="@punk4156" url="https://twitter.com/punk4156" leavesPage={true} />
                </li>
                <li>
                  <Link text="@eboyarts" url="https://twitter.com/eBoyArts" leavesPage={true} />
                </li>
                <li>
                  <Link text="@punk4464" url="https://twitter.com/punk4464" leavesPage={true} />
                </li>
                <li>solimander</li>
                <li>
                  <Link text="@dhof" url="https://twitter.com/dhof" leavesPage={true} />
                </li>
                <li>
                  <Link text="@devcarrot" url="https://twitter.com/carrot_init" leavesPage={true} />
                </li>
                <li>
                  <Link text="@TimpersHD" url="https://twitter.com/TimpersHD" leavesPage={true} />
                </li>
                <li>
                  <Link
                    text="@lastpunk9999"
                    url="https://twitter.com/lastpunk9999"
                    leavesPage={true}
                  />
                </li>
              </ul> */}
              <p>
                Because 100% of noname auction proceeds are sent to Noname DAO, Founders have chosen to
                compensate themselves with nonames. Every 10th noname for the first 5 years of the
                project (noname ids #0, #10, #20, #30 and so on) will be automatically sent to the
                Founders' multisig to be vested and shared among the founding members of the
                project.
              </p>
              <p>
                Founders distributions don't interfere with the cadence of 24 hour auctions. Nonames
                are sent directly to the Founders' Multisig, and auctions continue on schedule with
                the next available noname ID.
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Col>
    </Section>
  );
};
export default Documentation;
