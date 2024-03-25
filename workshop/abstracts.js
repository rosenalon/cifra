var abstracts = new Map();

function init(){
	abstracts.set("pravesh","");
	abstracts.set("rajendra","");
	abstracts.set("shuichi","");
	abstracts.set("simona","");
	abstracts.set("omri","Quantum computers are expected to revolutionize our ability to process information. The advancement from classical to quantum computing is a product of our advancement from classical to quantum physics -- the more our understanding of the universe grows, so does our ability to use it for computation. A natural question that arises is, what will physics allow in the future? Can more advanced theories of physics increase our computational power, beyond quantum computing?<br><br>An active field of research in physics studies theoretical phenomena outside the scope of explainable quantum mechanics, that form when attempting to combine Quantum Mechanics (QM) with General Relativity (GR) into a unified theory of Quantum Gravity (QG). QG is known to present the possibility of a quantum superposition of causal structure and event orderings. In the literature of quantum information theory, this translates to a superposition of unitary evolution orders.<br><br>In this work we show a first example of a natural computational model based on QG, that provides an exponential speedup over standard quantum computation (under standard hardness assumptions). We define a model and complexity measure for a quantum computer that has the ability to generate a superposition of unitary evolution orders, and show that such computer is able to solve in polynomial time two of the fundamental problems in computer science: The Graph Isomorphism Problem and the Gap Closest Vector Problem, with gap \\(O(n^2)\\) . These problems are believed by experts to be hard to solve for a regular quantum computer. Interestingly, our model does not seem overpowered, and we found no obvious way to solve entire complexity classes that are considered hard in computer science, like the classes <b>NP</b> and <b>SZK</b>.");
	abstracts.set("giulio","");
	abstracts.set("yuval","");
	abstracts.set("afonso","");
	abstracts.set("prashant","");
	abstracts.set("vinod","I will describe two results at the interface of statistics and machine learning, and cryptography.<br><br>First, in the increasingly common setting where the training of models is outsourced, I will describe a method whereby a malicious trainer can use cryptography to insert an <i>undetectable</i> backdoor in a classifier. Using a secret key, the trainer can then slightly alter inputs to create large deviations in the model output. Without the secret key, the existence of the backdoor is hidden. This result relies on the recently formulated hardness of the continuous learning with errors (CLWE) problem.<br><br>Second, I will show that CLWE is as hard as the widely studied learning with errors (LWE) problem using techniques from leakage-resilient cryptography. In turn, I will use this to show the nearly optimal hardness of the long-studied Gaussian mixture learning problem.<br><br>Based on joint works with Shafi Goldwasser, Michael P. Kim and Or Zamir; and with Aparna Gupte and Neekon Vafa.");
	abstracts.set("tim","");
	abstracts.set("pravesh","");
	abstracts.set("chris","");
	abstracts.set("miranda","We construct pseudorandom error-correcting codes (or simply pseudorandom codes), which are error-correcting codes with the property that any polynomial number of codewords are pseudorandom to any computationally-bounded adversary. Efficient decoding of corrupted codewords is possible with the help of a decoding key.<br><br>We build pseudorandom codes that are robust to substitution and deletion errors, where pseudorandomness rests on standard cryptographic assumptions. Specifically, pseudorandomness is based on either \\(2^{O(\\sqrt{n})}\\)-hardness of LPN, or polynomial hardness of LPN and the planted XOR problem at low density. <br><br>As our primary application of pseudorandom codes, we present an undetectable watermarking scheme for outputs of language models that is robust to cropping and a constant rate of random substitutions and deletions. The watermark is undetectable in the sense that any number of samples of watermarked text are computationally indistinguishable from text output by the original model. This is the first undetectable watermarking scheme that can tolerate a constant rate of errors.<br><br>Our second application is to steganography, where a secret message is hidden in innocent-looking content. We present a constant-rate stateless steganography scheme with robustness to a constant rate of substitutions. Ours is the first stateless steganography scheme with provable steganographic security and any robustness to errors.<br><br>This is joint work with Sam Gunn.");
	abstracts.set("eren","");
	abstracts.set("andrej","");
	abstracts.set("ilias_z","");
	abstracts.set("ilias_d","");
	abstracts.set("nobutaka","");
	abstracts.set("damiano","We study the following broad question about cryptographic primitives: is it possible to achieve security against an arbitrary \\(\\text{poly}(n)\\)-time adversary with \\(O(\\log n)\\)-size messages? It is common knowledge that the answer is ''no'' unless information-theoretic security is possible. In this work, we revisit this question by considering the setting of cryptography with public information and computational security.<br><br>We obtain the following  results, assuming variants of well-studied intractability assumptions:<ol><li>A private simultaneous messages (PSM) protocol for every \\(f:[n] \\times [n] \\rightarrow \\{0,1\\}\\) requiring \\((1+\\epsilon) \\log n\\)-bit messages for most functions and \\((2+\\epsilon) \\log n\\)-bit messages for the remaining ones. We apply this towards non-interactive secure 3-party computation with similar message size in the preprocessing model, improving over previous 2-round protocols.</li><li>A secret-sharing scheme for any ''forbidden-graph'' access structure on \\(n\\) nodes with \\(O(\\log n)\\) share size.</li><li>On the negative side, we show that computational threshold secret-sharing schemes with public information require share size \\(\\Omega(\\log \\log n)\\). For arbitrary access structures, we show that computational security does not help with 1-bit shares.</li></ol>The above positive results guarantee that any adversary of size \\(n^{o(\\log n)}\\) achieves an \\(n^{-\\Omega(1)}\\) distinguishing advantage. We show how to make the advantage negligible by slightly increasing the asymptotic message size, still improving over all known constructions.<br><br>The security of our constructions is based on the conjectured hardness of variants of the planted clique problem, which was extensively studied in the algorithms, statistical inference, and complexity theory communities. Our work provides the first applications of such assumptions improving the efficiency of mainstream cryptographic primitives, gives evidence for the necessity of such assumptions, and suggests new questions in this domain that may be of independent interest.");
}