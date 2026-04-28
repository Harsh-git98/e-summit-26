import Layout from "@/components/Layout";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { COMPETITIONS } from "@/data/constants";
import { useNavigate } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Trophy, Users, Calendar, Gift } from "lucide-react";
import ParticleCanvas from "@/components/ParticleCanvas";

const CompetitionsPage = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const navigate = useNavigate();

  return (
    <Layout>
      {/* Winners Section */}
      <section className="relative pt-12 md:pt-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8 md:mb-10">
            <p className="text-xs sm:text-sm tracking-[0.2em] text-primary uppercase mb-2">Final Results</p>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3">Winners</h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
              Latest verified results from competition tracks.
            </p>
          </div>

          <div className="grid md:grid-cols-1 gap-6">
            <div className="glass rounded-2xl p-6 border border-primary/30 bg-gradient-to-br from-primary/10 to-background/60">
              <h3 className="font-heading text-xl md:text-2xl font-bold mb-4 text-primary">Case X Case Study Competition</h3>
              <p className="text-sm md:text-base text-muted-foreground/90 leading-relaxed mb-4">
  The results of the <span className="font-medium">Case X Case Study Competition</span> conducted at the 
  <span className="font-medium"> Indian Institute of Engineering Science and Technology (IIEST), Shibpur</span> 
  have been officially finalized after a thorough and multi-stage evaluation of all submissions.
</p>

<p className="text-sm md:text-base text-muted-foreground/90 leading-relaxed mb-2 font-medium">
  🏆 Winners:
</p>

<ul className="text-sm md:text-base text-muted-foreground/90 leading-relaxed mb-4 list-disc pl-5 space-y-1">
  <li><span className="font-medium">1st Position:</span> Case Crew & Brief Boss</li>
  <li><span className="font-medium">2nd Position:</span> Quattro & Dominators</li>
</ul>

<p className="text-sm md:text-base text-muted-foreground/90 leading-relaxed mb-4">
  These teams stood out for their exceptional analytical depth, structured problem-solving approach, 
  and strategic clarity in a highly competitive pool of participants.
</p>

<p className="text-sm md:text-base text-muted-foreground/90 leading-relaxed mb-4">
  All winning teams are requested to send a <span className="font-medium">formal acknowledgement email</span> to 
  <span className="font-medium"> iiests.edc@gmail.com</span> to confirm receipt of the results. 
  This is a mandatory step to proceed with the next phase of the post-competition process and to ensure 
  accurate communication with each team.
</p>

<p className="text-sm md:text-base text-muted-foreground/90 leading-relaxed">
  Further details regarding the submission of bank account details and the prize distribution process 
  will be communicated shortly. Prize disbursement is currently subject to standard administrative and 
  official clearance procedures. We congratulate all participants for their outstanding efforts.
</p>
            </div>

            <div className="glass rounded-2xl p-6 border border-border/40 bg-gradient-to-br from-background/80 to-background/40">
  <h3 className="font-heading text-xl md:text-2xl font-bold mb-2 text-primary">
    Campus Creator Championship
  </h3>

  <p className="text-xs md:text-sm text-muted-foreground/70 mb-3">
    Indian Institute of Engineering Science and Technology (IIEST), Shibpur · Scintillations'26
  </p>

  <p className="text-xs md:text-sm text-muted-foreground/70 mb-4">
    Updated On: Apr 28, 2026
  </p>

  <p className="font-medium text-sm md:text-base mb-2">🏆 Overall Result</p>

  <div className="overflow-x-auto">
    <table className="w-full text-sm md:text-base text-left border-collapse">
      <thead>
        <tr className="border-b border-border/40 text-muted-foreground/80">
          <th className="py-2">Rank</th>
          <th className="py-2">Team Name</th>
          <th className="py-2">Name</th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-b border-border/30">
          <td className="py-2 font-medium">1</td>
          <td className="py-2">Harsh Ranjan</td>
          <td className="py-2">Harsh Ranjan</td>
        </tr>
        <tr>
          <td className="py-2 font-medium">2</td>
          <td className="py-2">Islavath Raj Kumar</td>
          <td className="py-2">Islavath Raj Kumar</td>
        </tr>
      </tbody>
    </table>
  </div>

   <p className="text-sm md:text-base text-muted-foreground/90 leading-relaxed">
       Further details regarding the submission of bank account details and the prize distribution process will be communicated shortly. Prize disbursement is currently subject to standard administrative and official clearance procedures. We congratulate all participants for their outstanding efforts.
    </p>
</div>

            <div className="glass rounded-2xl p-6 border border-border/40 bg-gradient-to-br from-background/80 to-background/40">
              <h3 className="font-heading text-xl md:text-2xl font-bold mb-2 text-primary">Vibe Build Hackathon</h3>

              <p className="text-xs md:text-sm text-muted-foreground/70 mb-3">
                Indian Institute of Engineering Science and Technology (IIEST), Shibpur · Scintillations'26
              </p>

              <p className="text-xs md:text-sm text-muted-foreground/70 mb-4">Updated On: Apr 29, 2026</p>

              <p className="font-medium text-sm md:text-base mb-2">🏆 Final Results</p>

              <ul className="text-sm md:text-base text-muted-foreground/90 leading-relaxed mb-3 list-disc pl-5 space-y-1">
                <li>
                  <span className="font-medium">1st Position :</span> Team Sahitya — Sanket Sahitya; Team Scammers — Harshit Maurya
                </li>
                <li>
                  <span className="font-medium">2nd Position :</span> 2023csb107.Yasharth — Yasharth Shukla; Anushreekhoudhary — Anushree Choudhary
                </li>
              </ul>

              <p className="text-sm md:text-base text-muted-foreground/90 leading-relaxed">
                Congratulations to all teams. All winners are requested to send a formal acknowledgement email to
                <span className="font-medium"> iiests.edc@gmail.com</span> to confirm receipt of the results and to proceed with prize disbursement.
              </p>
                <p className="text-sm md:text-base text-muted-foreground/90 leading-relaxed">
       Further details regarding the submission of bank account details and the prize distribution process will be communicated shortly. Prize disbursement is currently subject to standard administrative and official clearance procedures. We congratulate all participants for their outstanding efforts.
    </p>

            </div>

            

           
          </div>
        </div>
      </section>

      {/* Hero Banner */}
      <section className="relative min-h-[600px] flex items-center overflow-hidden">
        <ParticleCanvas />
        
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/15 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center justify-center gap-3 mb-6"
            >
              <Trophy className="w-8 h-8 text-primary" />
              <Badge className="px-4 py-1.5 text-sm bg-primary/20 text-primary border-primary/30 animate-pulse-glow">
                HIGH-STAKES CHALLENGES
              </Badge>
            </motion.div>
            
            <motion.h1
              className="font-heading text-4xl sm:text-6xl md:text-7xl font-extrabold mb-6 leading-tight"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <span className="text-gradient text-3xl md:text-6xl">Competitions</span>
            </motion.h1>
            
            <motion.p
              className="text-lg md:text-xl text-muted-foreground/80 max-w-2xl mx-auto mb-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Test your entrepreneurial mettle in high-stakes challenges designed to push boundaries.
            </motion.p>
            
            <motion.p
              className="text-sm md:text-base text-muted-foreground tracking-wide"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Join 5 intense competitions and showcase your innovation
            </motion.p>
          </div>
        </div>
        
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
      </section>

      {/* Cards */}
      <section className="py-16 md:py-24 px-4" ref={ref}>
        <div className="container mx-auto justify-content grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {COMPETITIONS.map((comp, i) => (
            <motion.div
              key={comp.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="cursor-pointer group h-full"
              onClick={() => navigate(`/competition/${comp.id}`)}
              whileHover={{ y: -5 }}
            >
              <div className="glass h-full rounded-2xl p-6 border border-border/40 group-hover:border-primary/50 transition-colors duration-200 flex flex-col justify-between bg-gradient-to-br from-background/80 to-background/40">
                <div>
                  <div className="flex items-center justify-between mb-3">
                   
                    <span className="inline-flex items-center gap-1 text-[11px] px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                      <Trophy className="w-3 h-3" />
                      Featured
                    </span>
                  </div>

                 
                  <img src={comp.mainImage} alt={comp.name} className="rounded-lg object-cover w-full" />
                   <p className="font-heading text-xl md:text-xl font-semibold mt-6 group-hover:text-primary transition-colors">
                     Rewards: {comp.prizePool}
                  </p>
                  <div className="text-sm text-muted-foreground/80 mt-2 group-hover:text-primary transition-colors border-t border-border/30 pt-2">
                    Know more &rarr;
                  </div>
                </div>

               
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default CompetitionsPage;
