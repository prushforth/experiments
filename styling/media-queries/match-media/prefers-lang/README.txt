TO DO

Implement hreflang-based <map-link> stylesheet language selection/negotiation (wire into _findVectorStyleLink / stylesheet discovery), with the existing experiments/globe/root-en.json + root-fr.json prototype and the rationale that hreflang (not media) is the correct mechanism.
Deprecate the prefers-lang map media feature once hreflang selection lands, as lang shouldn't be 
a media feature.
Both are flagged to revisit at the end of the port.