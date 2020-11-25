const gce = require('@google-cloud/compute') ({
  projectId: 'our-audio-282001'
});

const zone = gce.zone('us-central1-a');

console.log('Getting list of VMs...');

zone.getVMs().then((data) => {
  data[0].forEach((vm) => {
    console.log('Found VM called', vm.name);
  });
  console.log('Done.');
});
